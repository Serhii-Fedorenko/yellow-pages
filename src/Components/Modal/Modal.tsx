import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/modal/selectors";
import { toggleModal } from "../../redux/modal/slice";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  useEffect(() => {
    const handleKeyDown = (e: WindowEventMap["keydown"]) => {
      if (isModalOpen && e.code === "Escape") {
        dispatch(toggleModal());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isModalOpen]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalBackdrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
