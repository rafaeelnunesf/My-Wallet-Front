import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Entries } from "./pages";
import authContext from "./contexts/authContext";
import userContext from "./contexts/usercontext";
import { useState } from "react";
export default function App() {
  const [userData, setUserData] = useState({ id: "", name: "", token: "" });
  return (
    <authContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entries" element={<Entries />} />
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
}
