import React from "react";
import profileData from "../cardProfileData";
import BackgroundSlider from "../components/BackgroundSlider";
import CardSection from "../components/CardSection";
import FacultyHomeSection from "../components/FacultyHomeSection";
import NewsEvents from "../components/NewsEvents";
import Footer from "../components/Footer";

function CardArea() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        {profileData.map((data, index) => (
          <CardSection
            key={index}
            image={data.image}
            title={data.title}
            msg={data.msg}
          />
        ))}
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      <BackgroundSlider />
      <CardArea />
      <FacultyHomeSection />
      <NewsEvents />
      <Footer />
      {/* <div className="temp"></div> */}
    </>
  );
}

export default HomeScreen;
