import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="*" element={<p>No page placeholder</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
