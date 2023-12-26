import Header from "../../components/Header";
import HeroSection from "../../components/Landing/HeroSection";
import { landingImg } from "../../constants/imageUrl";

const LandingScreen = () => {
  return (
    <div
      style={{ backgroundImage: `url(${landingImg})` }}
      className={`flex-1 bg-cover flex flex-col`}
    >
      <Header />
      <div className="flex-1">
        <HeroSection  />
      </div>
    </div>
  );
};

export default LandingScreen;
