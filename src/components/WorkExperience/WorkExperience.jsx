import React from "react";
import "./WorkExperience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { textVariant } from "../../utils/motion";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="icon-div ">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="icons"
        />
      </div>
    }
  >
    <div>
      <h4 className="text-white text-[24px] font-bold">{experience.title}</h4>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-3 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white text-base pl-1 mb-2"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const WorkExperience = () => {
  return (
    <>
      <motion.div className="workExperience" variants={textVariant()}>
        <h1 className="heading">Work Experience</h1>
      </motion.div>
      <div className="verticalTimeLine mt-5">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
