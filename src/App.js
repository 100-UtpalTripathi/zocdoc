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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<Browse/>} />
        <Route path="/help" element={<Help />} />
        <Route path="/list-practice" element={<ListPractice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  );
}

export default App;
