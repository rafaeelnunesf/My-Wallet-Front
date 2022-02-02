import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Entries } from "./pages";
import authContext from "./contexts/authContext";
import { useState } from "react";
export default function App() {
  const { token, setToken } = useState();
  return (
    <authContext.Provider value={{ token, setToken }}>
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
