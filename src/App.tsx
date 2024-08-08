import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import RestrictedRoute from "./Components/Routes/RestrictedRoute";
import { useAuth } from "./hooks/useAuth";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignIn from "./Pages/SignIn";
import { refreshUser } from "./redux/auth/operations";
import { AppDispatch } from "./redux/store";
import './index.css'

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refrech user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LogIn />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<SignIn />} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
