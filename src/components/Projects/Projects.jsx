import React from "react";
import "./Projects.scss";
import projectData from "../../ProjectData";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

//modal

const Projects = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="projects">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projectData.slice(0,4).map((data) => (
          <SwiperSlide key={data.id}>
            <div className="slide-content">{data.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
