import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { updateSubscription } from "../../redux/auth/operations";
import { toggleModal } from "../../redux/modal/slice";
import { AppDispatch } from "../../redux/store";
import { Button } from "../SignInPage/SignInPage.styled";
import {
  RadioInput,
  RadioLabel,
  SubscriptionForm,
  SubscriptionLabel,
} from "./ChangeSubscription.styled";

const ChangeSubscription = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const subscription = (
      form.elements.namedItem("subscription") as HTMLInputElement
    ).value;

    dispatch(updateSubscription(subscription));
    dispatch(toggleModal());
  };

  return (
    <SubscriptionForm onSubmit={handleSubmit}>
      <SubscriptionLabel>
        Chose your plan
        <RadioLabel>
          <RadioInput type="radio" name="subscription" value="starter" />{" "}
          Starter
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" name="subscription" value="business" />{" "}
          Business
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" name="subscription" value="pro" /> Pro
        </RadioLabel>
      </SubscriptionLabel>
      <Button type="submit">Change plan</Button>
    </SubscriptionForm>
  );
};

export default ChangeSubscription;
