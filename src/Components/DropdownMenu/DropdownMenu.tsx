import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/modal/slice";
import { DropdownItem, DropdownList } from "./DropdownMenu.styled";

const DropdownMenu = forwardRef<HTMLUListElement>((props, ref) => {
  const dispatch = useDispatch()
  return (
    <DropdownList ref={ref}>
      <DropdownItem>Change avatar</DropdownItem>
      <DropdownItem onClick={() => dispatch(toggleModal())}>Change subscription</DropdownItem>
    </DropdownList>
  );
});

export default DropdownMenu;
