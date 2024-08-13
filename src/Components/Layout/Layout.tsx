import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { Button } from "../SignInPage/SignInPage.styled";
import { Container, Header, HeaderNavigation, Link, UserAvatar, UserMenu } from "./Layout.styled";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, user } = useAuth();
  console.log(user.avatarURL);
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
              <UserAvatar src={user.avatarURL}/>
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
