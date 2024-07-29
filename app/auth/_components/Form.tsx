import Link from "next/link";
import FormButton from "./FormButton";

interface FormInterface {
  children: React.ReactNode;
  formAction: (formData: FormData) => Promise<void>;
  authType: "SIGNIN" | "SIGNUP";
}

export default function Form({
  children,
  authType,
  formAction,
}: FormInterface) {
  const isLogInForm = authType !== "SIGNUP";

  return (
    <>
      <header>
        <h3>{!isLogInForm ? "Sign Up" : "Sign In"}</h3>
      </header>
      <main className="flex flex-col">
        <form className="flex flex-col gap-y-5 px-4" action={formAction}>
          {children}
          <FormButton>
            {!isLogInForm ? <span>Join Now</span> : <span>Log In</span>}
          </FormButton>
        </form>
        <small className="text-small mt-4 children:flex children:gap-x-2 children:justify-center children:text-center">
          {!isLogInForm ? (
            <span>
              Already a member?
              <Link href="/auth/login">Log In</Link>
            </span>
          ) : (
            <span>
              Not yet registered?
              <Link href="/auth/signup">Join Now</Link>
            </span>
          )}
        </small>
      </main>
    </>
  );
}
