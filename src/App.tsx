import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { useAuth } from "./hooks/useAuth";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignIn from "./Pages/SignIn";
import { refreshUser } from "./redux/auth/operations";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
