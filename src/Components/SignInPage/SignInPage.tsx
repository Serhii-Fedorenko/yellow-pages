import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { Button, Form, Input } from "./SignInPage.styled";

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
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Enter your Email" />
        <Input type="password" name="password" placeholder="Enter your Password"/>
        <Button type="submit">Sign In</Button>
      </Form>
    </div>
  );
};

export default SignInPage;
