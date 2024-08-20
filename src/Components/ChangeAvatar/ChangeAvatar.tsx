const ChangeAvatar = () => {
  return (
    <form action="" method="post" encType="multipart/form-data">
      <label>
        Upload new avatar:
        <input type="file" name="avatar" accept="image/*" />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
};

export default ChangeAvatar;
