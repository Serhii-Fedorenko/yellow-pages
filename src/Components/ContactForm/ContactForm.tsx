import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import { AppDispatch } from "../../redux/store";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite?: boolean;
  _id: string;
}

interface ContactFormProps {
    currentContact: Contact | null
}

const ContactForm: React.FC<ContactFormProps> = ({currentContact}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState(currentContact?.name || '')
  const [email, setEmail] = useState(currentContact?.email || '')
  const [phone, setPhone] = useState(currentContact?.phone || '')

  useEffect(() => {
    if(currentContact) {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.phone)
    }
  },[currentContact])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    setName('')
    setEmail('')
    setPhone('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="emial"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">
        {currentContact ? "Edit contact" : "Add contact"}
      </button>
    </form>
  );
};

export default ContactForm;
