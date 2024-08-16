import { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Button } from "../SignInPage/SignInPage.styled";
import {
  Container,
  Header,
  HeaderNavigation,
  Link,
  UserAvatar,
  UserInfo,
  UserMenu,
} from "./Layout.styled";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, user } = useAuth();
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsDropdownMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAvatarClick = () => {
    setIsDropdownMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <HeaderNavigation>
          <div>
            <Link to="/">Home</Link>

            {isLoggedIn && <Link to="/contacts">Contacts</Link>}

            {!isLoggedIn && (
              <>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign In</Link>
              </>
            )}
          </div>

          <div>
            {isLoggedIn && (
              <UserMenu>
                <UserInfo>
                  <p>{user.email}</p>
                  <p>{user.subscription}</p>
                </UserInfo>
                <UserAvatar src={user.avatarURL} onClick={handleAvatarClick} />
                {isDropdownMenuOpen && <DropdownMenu ref={menuRef} />}
                <Button type="button" onClick={() => dispatch(logout())}>
                  Log out
                </Button>
              </UserMenu>
            )}
          </div>
        </HeaderNavigation>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
