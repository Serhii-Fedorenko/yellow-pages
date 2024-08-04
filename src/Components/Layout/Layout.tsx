import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { Container, Header,Link } from "./Layout.styled";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>

          {isLoggedIn && <Link to="/contacts">Contacts</Link>}

          {!isLoggedIn && (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign In</Link>
            </>
          )}

          {isLoggedIn && (
            <button type="button" onClick={() => dispatch(logout())}>
              Log out
            </button>
          )}
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
