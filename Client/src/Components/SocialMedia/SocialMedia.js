import React from "react";

function SocialMedia() {
  return (
    <div className="socialMedia--container">
      <div className="socialMedia--twitter">
        <a href="https://www.twitter.com">
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square-150x150.png"
            alt="twitter"
          />
        </a>
      </div>

      <div className="socialMedia--facebook">
        <a href="https://www.facebook.com">
          <img src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-150x150.png"></img>
        </a>
      </div>

      <div className="socialMedia--instagram">
        <a href="https://www.instagram.com">
          <img src="https://pnggrid.com/wp-content/uploads/2021/06/Instagram-Logo-Transparent-1-150x150.png"></img>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
