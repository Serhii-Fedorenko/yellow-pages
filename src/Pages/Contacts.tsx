import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts } from "../redux/contacts/operations";
import { AppDispatch, RootState } from "../redux/store";

const Contacts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    dispatch(addContact({ name, email, phone }));
    form.reset();
  };

  const handleDelete = (id: string) => {dispatch(deleteContact(id))}

  return (
    <>
      <div>Contacts</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="emial" />
        <input type="text" name="phone" placeholder="phone" />
        <button type="submit">Add contact</button>
      </form>
      <ul>
        {contacts.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <button type="button" onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
