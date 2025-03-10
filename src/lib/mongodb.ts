import mongoose from "mongoose";

// Define a TypeScript interface for the cached connection
interface MongooseGlobal {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Access globalThis properly to store the cached connection
const globalWithMongoose = global as typeof globalThis & {
  mongoose?: MongooseGlobal;
};

const cached: MongooseGlobal = globalWithMongoose.mongoose || {
  conn: null,
  promise: null,
};

export async function connectDB(): Promise<mongoose.Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI!, options);
  }

  cached.conn = await cached.promise;
  globalWithMongoose.mongoose = cached; // Store the cached connection globally

  return cached.conn;
}
