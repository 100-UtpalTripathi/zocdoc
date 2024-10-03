import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Browse from "./components/Browse";
import Help from "./components/Help";
import ListPractice from "./components/ListPractice";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <LandingPage />
      <Routes>
        <Route path="/browse" element={<h1>Browse</h1>} />
        <Route path="/help" element={<h1>Help</h1>} />
        <Route path="/list-practice" element={<h1>List your practice</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
      </Routes>

    </>
  );
}

export default App;
