import styled from "styled-components";

export const AvatarForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const StyledInput = styled.input`
  display: none; /* приховати стандартний інпут */

  & + label {
    cursor: pointer;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    margin-bottom: 10px;
  }

  & + label:hover {
    background-color: #0056b3;
  }
`;

export const FileName = styled.span`
  margin-top: 10px;
  font-size: 18px;
  color: #232323;
  width: 80%;
  word-wrap: break-word;
`;
