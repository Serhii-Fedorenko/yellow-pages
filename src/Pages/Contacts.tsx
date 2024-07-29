const Contacts = () => {
  return (
    <>
      <div>Contacts</div>
      <form>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="emial" placeholder="emial" />
        <input type="text" name="phone" placeholder="phone" />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default Contacts;
