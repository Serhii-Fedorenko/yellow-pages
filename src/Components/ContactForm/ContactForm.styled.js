import styled from "styled-components";

export const CustomContactForm = styled.form`
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
`;

export const CustomContactInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CustomContactButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #FF9A00;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #D10363;
  }
`;
