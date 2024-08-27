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
  z-index: 999;
  right: 0;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: #808836;
  gap: 12px;
  padding: 8px 0;
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
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #ff9a00;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  position: relative;
`;

export const UserAvatar = styled.img`
width: 50px;  
height: 50px;
border-radius: 50%;
margin-right: 10px;
`

export const UserInfo = styled.div`
margin-right: 10px;
text-align: end;
color: white;
`
