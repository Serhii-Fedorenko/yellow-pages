import { Suspense } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Sign In</NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
