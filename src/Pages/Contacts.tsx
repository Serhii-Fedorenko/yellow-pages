import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
  updateFavoriteContact,
} from "../redux/contacts/operations";
import { AppDispatch, RootState } from "../redux/store";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite?: boolean;
  _id: string;
}

const Contacts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.items);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    if (currentContact) {
      dispatch(
        editContact({
          contactId: currentContact._id,
          credentials: { name, email, phone },
        })
      );
    } else {
      dispatch(addContact({ name, email, phone }));
    }
    form.reset();
    setCurrentContact(null);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleEditClick = (contact: Contact) => {
    setCurrentContact(contact);
  };

  const handleFavoriteClick = (contact: Contact) => {
    dispatch(
      updateFavoriteContact({
        contactId: contact._id,
        currentFavorite: !contact.favorite,
      })
    );
  };

  return (
    <>
      <div>Contacts</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={currentContact ? currentContact.name : ""}
        />
        <input
          type="text"
          name="email"
          placeholder="emial"
          defaultValue={currentContact ? currentContact.email : ""}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          defaultValue={currentContact ? currentContact.phone : ""}
        />
        <button type="submit">
          {currentContact ? "Edit contact" : "Add contact"}
        </button>
      </form>
      <ul>
        {contacts.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <button type="button" onClick={() => handleDelete(item._id)}>
              Delete
            </button>
            <button
              type="button"
              onClick={() =>
                handleEditClick({
                  _id: item._id,
                  name: item.name,
                  email: item.email,
                  phone: item.phone,
                })
              }
            >
              Edit
            </button>
            <button type="button" onClick={() => handleFavoriteClick(item)}>
              {item.favorite ? "favorite" : "unfavorite"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
