import "./App.css";
import { NavBar } from "./component/navbar";
import Home from "./component/home";
import { FooterFlowbite } from "./component/footer-flowbite";
import { Route, Routes } from "react-router";
import AllProjects from "./component/allProjects";
import AboutUs from "./component/aboutUs";
import TermsNConditions from "./component/termAndConditions";
import PrivacyPolicy from "./component/privacyPolicy";
import Community from "./component/Community";
import Registration from "./component/registrationPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProjects" element={<AllProjects />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/TermsNConditions" element={<TermsNConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Login" element={<Community />} />
      </Routes>
      <FooterFlowbite />
    </>
  );
}

export default App;
