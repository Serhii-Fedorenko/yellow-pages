import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignIn from "./Pages/SignIn";

function App() {
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
