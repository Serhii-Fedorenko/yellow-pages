import styled from "styled-components";

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  margin: 10px;
  outline: 1px solid black;
  list-style: none;
  background-color: #ff9a00;
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  padding: 5px 20px;
  width: 100%;

  &:hover {
    box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
