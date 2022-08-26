import React, { useState, useEffect, useTransition } from "react";

const intervalTime = 1500;
const autoScroll = true;

const carrouselImages = [
  {
    image: "https://i.im.ge/2022/08/26/OmzHlr.1.png",
    url: "https://www.page.com.ar",
    alt: "Mi vecino totoro",
  },
  {
    image: "https://i.im.ge/2022/08/26/Omzfwf.2.png",
    url: "https://www.page.com.ar",
    alt: "Kiki entregas a domicilio",
  },
  {
    image: "https://i.im.ge/2022/08/26/OmzkKm.3.png",
    url: "https://www.page.com.ar",
    alt: "El mundo secreto de Arrietty",
  },
  {
    image: "https://i.im.ge/2022/08/26/OmzpiW.4.png",
    url: "https://www.page.com.ar",
    alt: "Una voz silenciosa",
  },
];

const Carrousel = (_carrouselImages) => {
  let slideInterval;

  const [current, setCurrent] = useState(0);

  const length = carrouselImages.length;

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  function auto() {
    slideInterval = setInterval(nextImg, intervalTime);
  }

  useEffect(() => {
    setCurrent(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="carrousel">
      <button className="carrousel--left--arrow" onClick={prevImg}>
        {"<"}
      </button>
      <button className="carrousel--right--arrow" onClick={nextImg}>
        {">"}
      </button>

      {carrouselImages.map((carrouselImages, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <a href={carrouselImages.url}>
                <img
                  src={carrouselImages.image}
                  alt={carrouselImages.alt}
                  className="image"
                />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
