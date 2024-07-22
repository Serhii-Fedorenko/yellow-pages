import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { login, logout } from "../redux/auth/operations";
import { AppDispatch, RootState } from "../redux/store";

const LogIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    dispatch(
      login({
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
        <button type="submit">Log In</button>
      </form>
      {isLoggedIn && (
        <button type="button" onClick={() => dispatch(logout())}>
          Log out
        </button>
      )}
    </div>
  );
};

export default LogIn;
