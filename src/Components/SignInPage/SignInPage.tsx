import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const SignInPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    dispatch(
      register({
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
