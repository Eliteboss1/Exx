import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Developers from "./partitions/Developers";
import ExxGate from "./partitions/ExxGate";
import Benefits from "./partitions/Benefits";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="bg-body text-white font-abc">
      <div className=" px-[72px]">
        <div className="pt-11 ">
          <Navigation />
        </div>
        <div className="pt-36">
          <HeroSection />
        </div>
        <div className="pt-48 ">
          <Developers />
        </div>
        <div className="pt-[164.5px]">
          <ExxGate />
        </div>
        <div className="pt-40">
          <Benefits />
        </div>
      </div>
      <div className="pt-[154px]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
