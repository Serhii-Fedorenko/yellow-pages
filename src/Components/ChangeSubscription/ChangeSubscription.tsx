import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { updateSubscription } from "../../redux/auth/operations";
import { toggleModal } from "../../redux/modal/slice";
import { AppDispatch } from "../../redux/store";

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
    <form onSubmit={handleSubmit}>
      <label>
        Chose your plan
        <label>
          <input type="radio" name="subscription" value="starter" /> Starter
        </label>
        <label>
          <input type="radio" name="subscription" value="business" /> Business
        </label>
        <label>
          <input type="radio" name="subscription" value="pro" /> Pro
        </label>
      </label>
      <button type="submit">Change plan</button>
    </form>
  );
};

export default ChangeSubscription;
