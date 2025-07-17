import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Error from "./pages/Error";

// TODO:
// 1. Route pages ✅
// 2. Build the submit page (form component) ✅
// 3. Send a POST request to API ✅

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
