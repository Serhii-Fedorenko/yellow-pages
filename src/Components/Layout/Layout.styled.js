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
  background-color: #808836;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #ff9a00;
  }
`;

export const UserMenu = styled.div`
  display: flex;
`;

export const UserAvatar = styled.img`
width: 50px;  
height: 50px;
border-radius: 50%;
margin-right: 10px;
`
