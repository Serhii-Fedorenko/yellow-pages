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
    <ul>
      <li key={contact._id}>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <button type="button" onClick={() => onDelete(contact._id)}>
          Delete
        </button>
        <button
          type="button"
          onClick={() =>
            onEdit(contact)
          }
        >
          Edit
        </button>
        <button type="button" onClick={() => onToggleFavorite(contact)}>
          {contact.favorite ? "favorite" : "unfavorite"}
        </button>
      </li>
    </ul>
  );
};

export default ContactsList;
