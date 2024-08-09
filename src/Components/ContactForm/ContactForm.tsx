import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import { AppDispatch } from "../../redux/store";
import { CustomContactButton, CustomContactForm, CustomContactInput } from "./ContactForm.styled";

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
    <CustomContactForm onSubmit={handleSubmit}>
      <CustomContactInput
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <CustomContactInput
        type="text"
        name="email"
        placeholder="emial"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <CustomContactInput
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={(e: any) => setPhone(e.target.value)}
      />
      <CustomContactButton type="submit">
        {currentContact ? "Edit contact" : "Add contact"}
      </CustomContactButton>
    </CustomContactForm>
  );
};

export default ContactForm;
