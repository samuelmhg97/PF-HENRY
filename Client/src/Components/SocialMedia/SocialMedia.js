import React from "react";
import "./SocialMedia.css";
import iconSource from "./SocialMediaSource.js";

const icons = iconSource;

function SocialMedia(_icons) {
  return (
    <div className="socialMedia--container">
      {icons.map((icon) => {
        return (
          <a href={icon.url} target="blank" key={(icon.id += 10)}>
            <img
              key={icon.id}
              className="socialMedia--logo"
              src={icon.image}
              alt={icon.alt}
            ></img>
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
