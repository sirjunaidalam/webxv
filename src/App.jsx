import "./App.css";
import HeroSection from "./component/heroSection";
import { NavBar } from "./component/navbar";
import OurPartner from "./component/ourPartner";
import AboutUs from "./component/aboutUs";
import TopCryptoChart from "./component/cryptoCurrencies";
import XvTokenBanner from "./component/xvTokenBanner";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OurPartner />
      <AboutUs />
      <TopCryptoChart />
      <XvTokenBanner />
      <Footer />
    </>
  );
}

export default App;
