import React, { useEffect } from "react";
import "./ProfileCard.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProfileCard = () => {
  return (
    <div className="container profileContainer">
      <div id="login-container">
        <div className="profile-img"></div>
        <h1>Habib</h1>
        <div className="description">
          "I am a skilled front-end developer with a passion for creating
          intuitive, visually appealing and user-friendly web applications".
        </div>
        <div className="social">
          <a href="https://github.com/Habib7442" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/habib-tanwir/" target="_blank">
            <LinkedInIcon />
          </a>
          <a target="_blank">
            <TwitterIcon />
          </a>
        </div>
        <button>
          <a href="mailto: habibtanwir1906@gmail.com" target="_blank">
            Hire Me
          </a>
        </button>
        <footer>
          <div className="likes">
            <p>
              <i><FavoriteBorderIcon /></i>
            </p>
            <p>1.5K</p>
          </div>
          <div className="projects">
            <p>Projects</p>
            <p>154</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProfileCard;
