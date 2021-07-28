import React, { useState } from "react";
import sliderImages from "../sliderImages";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./slider.css";

function Slider() {
  const [current, setCurrent] = useState(0);
  const lengthArray = sliderImages.length;

  function prevImage() {
    setCurrent(current === 0 ? lengthArray - 1 : current - 1);
  }
  function nextImage() {
    setCurrent(current === lengthArray - 1 ? 0 : current + 1);
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <FaAngleLeft
          className="left-arrow"
          onClick={prevImage}
          className="left-arrow"
        />
        <FaAngleRight
          className="right-arrow"
          onClick={nextImage}
          className="right-arrow"
        />
        {sliderImages.map((slide, index) => {
          return (
            current === index && (
              <img
                src={slide.image}
                alt="slider images"
                className="slider-image"
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
