import React from "react";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="content-wrapper">
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
