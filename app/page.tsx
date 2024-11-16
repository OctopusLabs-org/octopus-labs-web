import React from "react";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="content-wrapper" style={{ marginBottom: "30vh" }}>
        <MainSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
