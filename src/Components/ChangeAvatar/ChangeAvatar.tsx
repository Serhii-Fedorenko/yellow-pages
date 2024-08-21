import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { Button } from "../SignInPage/SignInPage.styled";
import { AvatarForm, FileName, StyledInput } from "./ChangeAvatar.styled";

const ChangeAvatar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "file not found");
  };

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
    <AvatarForm
      action=""
      method="patch"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <StyledInput
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        onChange={handleFileChange}
      />
      <label htmlFor="avatar">Upload new avatar:</label>
      <FileName>{fileName}</FileName>
      <Button type="submit">Upload</Button>
    </AvatarForm>
  );
};

export default ChangeAvatar;
