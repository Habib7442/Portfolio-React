import { Suspense, lazy } from "react";
const Carousels = lazy(() => import("../../components/Carousel/Carousel"));
const SwipeableTemporaryDrawer = lazy(() =>
  import("../../components/Drawer/Drawer")
);
const Projects = lazy(() => import("../../components/Projects/Projects"));
const Sidebar = lazy(() => import("../../components/Sidebar/Sidebar"));
const Review = lazy(() => import("../Review/Review"));
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Home.scss";
import { Link } from "react-router-dom";
import Git from "../../components/Github/Git";
import { useEffect, useState } from "react";
const WorkExperience = lazy(() => import( "../../components/WorkExperience/WorkExperience"));
const Tech = lazy(() => import("../../components/Tech/Tech")) ;
const Contact = lazy(() => import( "../Contact/Contact"));
import mobImg from "../../assets/mobile.png" ;
import laptopImg from "../../assets/laptop.png" ;
import gitImg from "../../assets/github.png" ;
const MapChart = lazy(() => import("../../components/Maps/Map")) ;
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";
const Earth = lazy(() => import("../../components/canvas/Earth")) ;
const CanvasLoader = lazy(() => import("../../components/Loader")) ;
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  }
  return (
    <>
      <div className="home" style={{backgroundColor: backgroundColor}}>
        <div className="left">
          <Sidebar />
        </div>
        <div className="center">
        <div className="mt-4 space-x-2 flex justify-center items-center">
        <button
          className="text-white px-3 py-1 rounded bg-teal-400"
          onClick={() => handleColorChange('#008080')}
        >
          Teal
        </button>
        <button
          className="text-white px-3 py-1 rounded bg-orange-500"
          onClick={() => handleColorChange('#FFA500')}
        >
          Orange
        </button>
        <button
          className="bg-pink-400 text-white px-3 py-1 rounded"
          onClick={() => handleColorChange('#FF69B4')}
        >
          Pink
        </button>
      </div>
          <section className="first-section">
            <main
              id="swup"
              className="first-section-main transition-fade relative z-0"
            >
              <h1 className="heading">Hi, I'm Habib</h1>
              <p className="sub_heading">Front End Developer</p>
            </main>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden sm:block"
            >
              <Canvas
                shadows
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [-4, 3, 6],
                }}
              >
                <Suspense fallback={<CanvasLoader />}>
                  <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                  />
                  <Earth />

                  <Preload all />
                </Suspense>
              </Canvas>
              {/* <EarthCanvas /> */}
            </motion.div>
            {/* <StarsCanvas /> */}
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
              <a href="https://github.com/Habib7442">
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
        <div className=" hidden sm:block">
          <SwipeableTemporaryDrawer />
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/all-project" class="nav-link px-2 text-muted">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-form" class="nav-link px-2 text-muted">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/review-form" class="nav-link px-2 text-muted">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/certificate" class="nav-link px-2 text-muted">
                  Achievement
                </Link>
              </li>
            </ul>
            <p className="text-center text-muted">© 2022 Habib</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
