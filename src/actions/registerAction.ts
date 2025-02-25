"use server";
import { redirect } from "next/navigation";

export type Errors = {
  username?: string;
  email?: string;
  password?: string;
  compass?: string;
};

export type NewUser = {
  username?: string;
  email?: string;
  password?: string;
  compass?: string;
};

export type FormState = {
  errors: Errors;
  newUser: NewUser;
};

//register function
export const handleRegistration = async (
  prevState: FormState,
  formData: FormData
) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const compass = formData.get("compass") as string;

  //response data
  const newUser: NewUser = { username, email, password, compass };

  //error check
  const errors: Errors = {};

  if (!username) {
    errors.username = "Enter your username";
  }

  if (!email) {
    errors.email = "Enter your email";
  }

  if (!password) {
    errors.password = "Enter your password";
  }

  if (!compass) {
    errors.compass = "Enter your password again";
  }

  if (password != compass) {
    errors.password = "password don't match";
    errors.compass = "password don't match";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, newUser };
  }

  redirect("/login");
};
