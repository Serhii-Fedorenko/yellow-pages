import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../Components/ContactForm/ContactForm";
import Contact from "../Components/Contact/Contact";
import {
  deleteContact,
  fetchContacts,
  updateFavoriteContact,
} from "../redux/contacts/operations";
import { AppDispatch, RootState } from "../redux/store";
import { ContactsList } from "../Components/Contact/Contact.styled";
import {
  selectIsModalOpen,
  selectModalContent,
} from "../redux/modal/selectors";
import Modal from "../Components/Modal/Modal";
import ChangeSubscription from "../Components/ChangeSubscription/ChangeSubscription";
import ChangeAvatar from "../Components/ChangeAvatar/ChangeAvatar";

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
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalContent = useSelector(selectModalContent);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

  const handleResetCurrentContact = () => {
    setCurrentContact(null);
  };

  return (
    <>
      <ContactForm
        currentContact={currentContact}
        onResetCurrentContact={handleResetCurrentContact}
      />
      <ContactsList>
        {contacts.map((item) => (
          <Contact
            key={item._id}
            contact={item}
            onDelete={handleDelete}
            onEdit={handleEditClick}
            onToggleFavorite={handleFavoriteClick}
          />
        ))}
      </ContactsList>
      {isModalOpen && (
        <Modal>
          {modalContent === "avatar" ? (
            <ChangeAvatar />
          ) : (
            <ChangeSubscription />
          )}
        </Modal>
      )}
    </>
  );
};

export default Contacts;
