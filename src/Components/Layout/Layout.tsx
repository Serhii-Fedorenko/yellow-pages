import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>

          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

          {!isLoggedIn && (
            <>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/register">Sign In</NavLink>
            </>
          )}

          {isLoggedIn && (
            <button type="button" onClick={() => dispatch(logout())}>
              Log out
            </button>
          )}
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
