import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalOpen,
  selectModalContent,
} from "../../redux/modal/selectors";
import { setModalContent, toggleModal } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import { DropdownItem, DropdownList } from "./DropdownMenu.styled";

const DropdownMenu = forwardRef<HTMLUListElement>((props, ref) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalContent = useSelector(selectModalContent);

  const handleItemClick = (content: string) => {
    dispatch(setModalContent(content));
    dispatch(toggleModal())
  };

  return (
    <>
      <DropdownList ref={ref}>
        <DropdownItem onClick={() => handleItemClick("avatar")}>
          Change avatar
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("subscription")}>
          Change subscription
        </DropdownItem>
      </DropdownList>
    </>
  );
});

export default DropdownMenu;
