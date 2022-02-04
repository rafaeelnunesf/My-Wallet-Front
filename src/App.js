import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Entries } from "./pages";
import authContext from "./contexts/authContext";
import userContext from "./contexts/usercontext";
import { useState } from "react";
export default function App() {
  const [userData, setUserData] = useState({ id: "", name: "", token: "" });
  const [entrie, setEntrie] = useState("");

  return (
    <authContext.Provider value={{ userData, setUserData }}>
      <userContext.Provider value={{ entrie, setEntrie }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/entries/:IDentrie" element={<Entries />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </authContext.Provider>
  );
}
