import React, { useState, useEffect, useRef } from "react";
import "./Carrousel.css";
import carrouselImg from "./CarrouselSource";

const carrouselImages = carrouselImg;

const Carrousel = (_carrouselImages) => {
  let intervalTime = 4000;
  let autoScroll = true;
  let hoverImg = useRef(null);

  let slideInterval = useRef(null);

  const [current, setCurrent] = useState(0);

  const length = carrouselImages.length;

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setCurrent(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slideInterval.current = setInterval(nextImg, intervalTime);
    }

    return () => clearInterval(slideInterval.current);
  }, [autoScroll, slideInterval, nextImg]);

  return (
    <div className="carrousel--container">
      <button className="carrousel--left--arrow" onClick={prevImg}>
        {"<"}
      </button>

      {carrouselImages?.map((carrouselImages, index) => {
        return (
          <div
            ref={hoverImg}
            className={
              index === current
                ? "carrousel--image--active"
                : "carrousel--image--inactive"
            }
            key={index}
          >
            {index === current && (
              <a href={carrouselImages.url}>
                <img
                  src={carrouselImages.image}
                  alt={carrouselImages.alt}
                  className="carrousel--image"
                />
              </a>
            )}
          </div>
        );
      })}

      <button className="carrousel--right--arrow" onClick={nextImg}>
        {">"}
      </button>
    </div>
  );
};

export default Carrousel;
