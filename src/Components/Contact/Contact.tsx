import { CustomContactButton } from "../ContactForm/ContactForm.styled";
import {
  ButtonContainer,
  ContactContainer,
  InfoContainer,
} from "./Contact.styled";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite?: boolean;
  _id: string;
}

interface ContactsListProps {
  contact: Contact;
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
  onToggleFavorite: (contact: Contact) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contact,
  onDelete,
  onEdit,
  onToggleFavorite,
}) => {
  return (
    <ContactContainer key={contact._id}>
      <InfoContainer>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </InfoContainer>
      <ButtonContainer>
        <CustomContactButton type="button" onClick={() => onDelete(contact._id)}>
          Delete
        </CustomContactButton>
        <CustomContactButton type="button" onClick={() => onEdit(contact)}>
          Edit
        </CustomContactButton>
        <CustomContactButton type="button" onClick={() => onToggleFavorite(contact)}>
          {contact.favorite ? "favorite" : "unfavorite"}
        </CustomContactButton>
      </ButtonContainer>
    </ContactContainer>
  );
};

export default ContactsList;
