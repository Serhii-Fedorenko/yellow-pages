import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: tomato;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: white;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
