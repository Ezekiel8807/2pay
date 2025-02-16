import AuthForm from "@/components/AuthForm";

export default function Login() {
  return (
    <>
      <AuthForm title="Login" formBtnValue="Login">
        <input
          className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
          type="password"
          name="password"
          placeholder="Password"
        />
      </AuthForm>
    </>
  );
}
