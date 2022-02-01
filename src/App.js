import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/entries" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
