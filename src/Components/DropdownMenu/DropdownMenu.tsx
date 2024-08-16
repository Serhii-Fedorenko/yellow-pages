import { forwardRef } from "react";

const DropdownMenu = forwardRef<HTMLUListElement>((props, ref) => {
  return (
    <ul ref={ref}>
      <li>Change avatar</li>
      <li>Change subscription</li>
    </ul>
  );
});

export default DropdownMenu;
