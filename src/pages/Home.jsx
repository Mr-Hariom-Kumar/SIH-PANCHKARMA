import React from "react";
import Header from "../components/Header"; //ch
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ChatBubble from "../components/Chatbubble";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <ChatBubble/> 
    </div>
  );
};

export default Home;
