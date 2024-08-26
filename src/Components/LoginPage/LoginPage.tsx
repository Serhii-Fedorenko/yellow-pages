import Notiflix from "notiflix";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { login } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { Button, Form, Input } from "../SignInPage/SignInPage.styled";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useAuth();

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
    <Form onSubmit={handleSubmit}>
      <>{error && Notiflix.Notify.failure("Incorrect username or password")}</>
      <Input type="email" name="email" placeholder="Enter your Email" />
      <Input
        type="password"
        name="password"
        placeholder="Enter your Password"
      />
      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginPage;
