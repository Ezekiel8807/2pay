"use client";
import Link from "next/link";
import { useActionState } from "react";
import { FormState } from "@/actions/registerAction";
import { handleRegistration } from "@/actions/registerAction";

// components
import AuthForm from "@/components/AuthForm";
import Button from "@/components/Button";
import FormError from "@/components/FormError";

export default function Register() {
  //initial registration state
  const initialFormState: FormState = {
    errors: {},
    newUser: {},
  };

  const [state, formAction, isLoading] = useActionState(
    handleRegistration,
    initialFormState
  );

  return (
    <>
      <AuthForm title="Register">
        <form action={formAction}>
          <input
            className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
            type="text"
            name="username"
            defaultValue={state.newUser.username}
            placeholder="Username"
          />
          {state.errors.username && (
            <FormError>{state.errors.username}</FormError>
          )}

          <input
            className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
            type="email"
            name="email"
            defaultValue={state.newUser.email}
            placeholder="Email"
          />
          {state.errors.email && <FormError>{state.errors.email}</FormError>}

          <input
            className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
            type="password"
            name="password"
            defaultValue={state.newUser.password}
            placeholder="Password"
          />
          {state.errors.password && (
            <FormError>{state.errors.password}</FormError>
          )}

          <input
            className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
            type="password"
            name="compass"
            defaultValue={state.newUser.compass}
            placeholder="Password Again"
          />
          {state.errors.compass && (
            <FormError>{state.errors.compass}</FormError>
          )}

          <div className="flex items-center justify-between mb-3">
            <Link className="text-[12px] cursor-pointer" href="/login">
              Back to login
            </Link>
          </div>

          <Button btnStyle="font-black float-right px-10 py-2 bg-[var(--green)] text-[var(--white)] rounded">
            {isLoading ? "Processing..." : "Register"}
          </Button>
        </form>
      </AuthForm>
    </>
  );
}
