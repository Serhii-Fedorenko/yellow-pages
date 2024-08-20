import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { setModalContent, toggleModal } from "../../redux/modal/slice";
import { DropdownItem, DropdownList } from "./DropdownMenu.styled";

const DropdownMenu = forwardRef<HTMLUListElement>((props, ref) => {
  const dispatch = useDispatch();

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
