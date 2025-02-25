"use client";
import Link from "next/link";
import { useActionState } from "react";
import { FormState, handleLogin } from "@/actions/loginAction";

// components
import AuthForm from "@/components/AuthForm";
import Button from "@/components/Button";
import FormError from "@/components/FormError";

export default function Login() {
  //initial form state
  const loginInitialState: FormState = {
    errors: {},
    user: {},
  };

  //form state management using useActionState
  const [state, formAction, isLoading] = useActionState(
    handleLogin,
    loginInitialState
  );
  return (
    <>
      <AuthForm title="Login">
        <form action={formAction}>
          <input
            className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
            type="text"
            name="username"
            defaultValue={state.user.username}
            placeholder="Username"
          />
          {state.errors.username && (
            <FormError>{state.errors.username}</FormError>
          )}
          <input
            className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
            type="password"
            name="password"
            defaultValue={state.user.password}
            placeholder="Password"
          />
          {state.errors.password && (
            <FormError>{state.errors.password}</FormError>
          )}

          <div className="flex items-center justify-between mb-3">
            <Link className="text-[12px] cursor-pointer" href="/register">
              Register now!!!
            </Link>
            <Link className="text-[12px] cursor-pointer" href="/forget">
              Retrive account?
            </Link>
          </div>

          <Button btnStyle="font-black float-right px-10 py-2 bg-[var(--green)] text-[var(--white)] rounded">
            {isLoading ? "Authenticating..." : "Login"}
          </Button>
        </form>
      </AuthForm>
    </>
  );
}
