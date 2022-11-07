import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/advertisement/Home";
import Qrcode from "./components/qrcode/Qrcode";

function App() {
  localStorage.setItem("elevatorId", "ELE_3041");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="qr" element={<Qrcode />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
