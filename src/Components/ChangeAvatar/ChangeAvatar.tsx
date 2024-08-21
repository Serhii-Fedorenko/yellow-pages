import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const ChangeAvatar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const avatar = (form.elements.namedItem("avatar") as HTMLInputElement)
      .files?.[0];

    if (avatar) {
      dispatch(updateAvatar(avatar));
    }
  };

  return (
    <form
      action=""
      method="patch"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <label>
        Upload new avatar:
        <input type="file" name="avatar" accept="image/*" />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
};

export default ChangeAvatar;
