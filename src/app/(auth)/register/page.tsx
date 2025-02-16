import AuthForm from "@/components/AuthForm";

export default function Register() {
  return (
    <>
      <AuthForm title="Register" formBtnValue="Register">
        <input
          className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="block p-2 border-b-2 border-[var(--green)] outline-none rounded w-full my-5"
          type="email"
          name="email"
          placeholder="Email"
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
