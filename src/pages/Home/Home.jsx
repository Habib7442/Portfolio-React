import React from "react";
import Carousels from "../../components/Carousel/Carousel";
import SwipeableTemporaryDrawer from "../../components/Drawer/Drawer";
import Projects from "../../components/Projects/Projects";
import Sidebar from "../../components/Sidebar/Sidebar";
import Review from "../Review/Review";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Home.scss";
import { Link } from "react-router-dom";
import Git from "../../components/Github/Git";
import { useEffect, useState } from "react";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Tech from "../../components/Tech/Tech";
import Contact from "../Contact/Contact";
import mobImg from "../../assets/mobile.png";
import laptopImg from "../../assets/laptop.png";
import gitImg from "../../assets/github.png";
import MapChart from "../../components/Maps/Map";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";
import EarthCanvas from "../../components/canvas/Earth";
import StarsCanvas from "../../components/canvas/Stars";

const Home = () => {
  return (
    <>
      <div className="home bg-dark">
        <div className="left">
          <Sidebar />
        </div>
        <div className="center">
          {/* <div className="profile-container">
            {profile && (
              <div className="profile-section">
                <ProfileCard />
                <button onClick={handleClick}>
                  <CloseIcon />
                </button>
              </div>
            )}
          </div> */}
          <section className="first-section">
            <main id="swup" className="first-section-main transition-fade relative z-0">
              <h1 className="heading">Hi, I'm Habib</h1>
              <p className="sub_heading">Front End Developer</p>
            </main>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
              <EarthCanvas />
            </motion.div>
            <StarsCanvas />
          </section>
          <section className="second-section">
            <h2 className="proTitle">My Projects</h2>
            <div className="project">
              <div className="projectLeft" data-aos="fade-right">
                <Projects />
              </div>
              <div className="projectRight" data-aos="fade-left">
                <div className="laptop">
                  <img className="imgLaptop" src={laptopImg} alt="" />
                  <div className="laptopScreen">
                    {/* <img className="screenImg" src={import("../../assets/netfliximg.png")} alt="" /> */}
                    <Carousels />
                  </div>
                </div>
                <div className="mobile">
                  <img className="imgMobile" src={mobImg} alt="" />
                  <div className="mobileScreen">
                    {/* <img className="screenImg" src={import("../../assets/netfliximg.png")} alt="" /> */}
                    <Carousels />
                  </div>
                </div>
              </div>
            </div>
            <div className="linkToProject">
              <Link to="/all-project">
                <span style={{ color: "lightgray" }}>All Projects</span>
                <ArrowCircleRightIcon
                  style={{ color: "lightgray", marginLeft: "5px" }}
                />
              </Link>
            </div>
          </section>
          <section className="workExp-section mt-4">
            <WorkExperience />
          </section>
          <section className="third-section">
            <h2 className="techTitle">Weapons I Use</h2>
            <div className="techstacks" data-aos="zoom-out-left">
              <Tech />
            </div>
          </section>
          <section className="git-section">
            <h2 className="gitTitle">Want to see more Projects</h2>
            <div className="gitDiv">
              <Git />
            </div>
            <div className="gitImgDiv">
              <a href="https://github.com/Habib7442" target="_blank">
                <img className="gitImg" src={gitImg} alt="" />
              </a>
            </div>
          </section>
          <section className="contact-section">
            <h2 className="contactTitle">Contact Me</h2>
            <div className="inner-div">
              <div className="left_div">
                <Contact />
              </div>
              <div className="right_div">
                <MapChart />
              </div>
            </div>
          </section>
          <section className="fourth-section">
            <h2 className="testTitle">Testimonial</h2>
            <motion.div
              variants={fadeIn("", "spring", 0.2, 1)}
              className="review d-flex flex-wrap rounded-3xl xs:w-[320px] w-full"
              data-aos="flip-down"
            >
              <Review />
            </motion.div>

            <div className="linkToProject">
              <Link to="/all-reviews">
                <span style={{ color: "lightgray" }}>All Reviews</span>
                <ArrowCircleRightIcon
                  style={{ color: "lightgray", marginLeft: "5px" }}
                />
              </Link>
            </div>
          </section>
        </div>
        <div className="right">
          <SwipeableTemporaryDrawer />
          <h6 className="drawerTitle">HOME</h6>
        </div>
      </div>
      <div className="footer">
        <div class="container">
          <footer class="py-3">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <Link to="/" class="nav-link px-2 text-muted">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/all-project" class="nav-link px-2 text-muted">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact-form" class="nav-link px-2 text-muted">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/review-form" class="nav-link px-2 text-muted">
                  Review
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/certificate" class="nav-link px-2 text-muted">
                  Achievement
                </Link>
              </li>
            </ul>
            <p class="text-center text-muted">© 2022 Habib</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
