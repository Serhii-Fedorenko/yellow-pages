import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/modal/selectors";
import { setModalContent, toggleModal } from "../../redux/modal/slice";
import {
  CloseButton,
  CloseIcon,
  ModalBackdrop,
  ModalContent,
} from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  useEffect(() => {
    const handleKeyDown = (e: WindowEventMap["keydown"]) => {
      if (isModalOpen && e.code === "Escape") {
        dispatch(toggleModal());
        dispatch(setModalContent(''))
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal());
      dispatch(setModalContent(''))
    }
  };

  const handleCloseButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleModal())
    dispatch(setModalContent(''))
  }

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleCloseButtonClick}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
