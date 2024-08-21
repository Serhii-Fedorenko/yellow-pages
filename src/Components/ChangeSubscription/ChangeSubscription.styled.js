import styled from "styled-components";

export const SubscriptionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const SubscriptionLabel = styled.label`
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const RadioInput = styled.input`
  accent-color: #FF9A00;
`;
