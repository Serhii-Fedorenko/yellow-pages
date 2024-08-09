import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactsList from "../Components/ContactsList/ContactsList";
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
      <ContactForm currentContact={currentContact}/>
      <div>
        {contacts.map((item) => (
          <ContactsList
            key={item._id}
            contact={item}
            onDelete={handleDelete}
            onEdit={handleEditClick}
            onToggleFavorite={handleFavoriteClick}
          />
        ))}
      </div>
    </>
  );
};

export default Contacts;
