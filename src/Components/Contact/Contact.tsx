import {
  ButtonContainer,
  ContactButton,
  ContactContainer,
  DeleteButton,
  EditButton,
  InfoContainer,
} from "./Contact.styled";
import {
  FavoriteButton,
  FavoriteButtonContainer,
  FilledStar,
  UnfilledStar,
} from "./FavoriteButton.styled";

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
        <ContactButton type="button" onClick={() => onDelete(contact._id)}>
          <DeleteButton />
        </ContactButton>
        <ContactButton type="button" onClick={() => onEdit(contact)}>
          <EditButton />
        </ContactButton>
        <FavoriteButtonContainer>
          <FavoriteButton
            type="button"
            data-favorite={contact.favorite ? 1 : 0}
            onClick={() => onToggleFavorite(contact)}
          >
            {contact.favorite ? <FilledStar /> : <UnfilledStar />}
          </FavoriteButton>
        </FavoriteButtonContainer>
      </ButtonContainer>
    </ContactContainer>
  );
};

export default ContactsList;
