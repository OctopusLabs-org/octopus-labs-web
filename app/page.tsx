import React from "react";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import ServicesSection from "./components/ServicesSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="content-wrapper">
        <MainSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;
