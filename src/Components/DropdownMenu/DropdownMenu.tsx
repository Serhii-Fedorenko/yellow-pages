import { forwardRef } from "react";
import { DropdownItem, DropdownList } from "./DropdownMenu.styled";

const DropdownMenu = forwardRef<HTMLUListElement>((props, ref) => {
  return (
    <DropdownList ref={ref}>
      <DropdownItem>Change avatar</DropdownItem>
      <DropdownItem>Change subscription</DropdownItem>
    </DropdownList>
  );
});

export default DropdownMenu;
