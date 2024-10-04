import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Browse from "./components/Browse";
import Help from "./components/Help";
import ListPractice from "./components/ListPractice";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Insurance from "./components/Insurance";
import TopSearchedSpecialities from "./components/TopSearchedSpecialities";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Jobs from "./components/Jobs";
import ZocdocAppSection from "./components/ZocdocAppSection";
import SpecialitiesInCities from "./components/SpecialitiesInCities";


import ProviderService from "./components/ProviderService";

function App() {
  return (
    <>
      <LandingPage />
      <Insurance />
      
      <TopSearchedSpecialities/>

      <Services />
      <ZocdocAppSection />
      <ProviderService />
      <Partners />
      <Jobs />
      <SpecialitiesInCities />
      <Routes>
        
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
