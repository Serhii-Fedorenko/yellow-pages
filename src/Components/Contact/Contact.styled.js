import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export const ContactsList = styled.ul`
  position: relative;
  z-index: -200;
  padding: 20px 200px;
  margin-top: 80px;
`;

export const ContactContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;

export const InfoContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
`;

export const EditButton = styled(MdEdit)`
  color: #ff9a00;
  font-size: 30px;
`;

export const DeleteButton = styled(MdDeleteForever)`
  color: #ff9a00;
  font-size: 30px;
`;

export const ContactButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 20px;

  &:hover {
    transform: scale(1.2);
  }
`;
