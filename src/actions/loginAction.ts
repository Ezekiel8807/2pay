"use server";
import { redirect } from "next/navigation";

export type UserErrors = {
  username?: string;
  password?: string;
};

export type User = {
  username?: string;
  password?: string;
};

export type FormState = {
  errors: UserErrors;
  user: User;
};

export const handleLogin = async (prevState: FormState, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const user: User = { username, password };

  //error check
  const errors: UserErrors = {};

  if (!username) {
    errors.username = "Enter your username";
  }

  if (!password) {
    errors.password = "Enter your password";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, user };
  }

  redirect("/dashboard");
};
