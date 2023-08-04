import React from "react";
import SwipeableTemporaryDrawer from "../../components/Drawer/Drawer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AllProject.scss";
import projectData from "../../ProjectData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import { textVariant } from "../../utils/motion";

import "react-vertical-timeline-component/style.min.css";

const ProjectCard = ({ project }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={project.date}
    iconStyle={{ background: project.iconBg }}
    icon={
      <div className="icon-div ">
        <img src={project.icon} alt={project.title} className="icons" />
      </div>
    }
  >
    <div>
      <h4 className="text-white text-[24px] font-bold">{project.title}</h4>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {project.title}
      </p>
    </div>
    <ul className="mt-3 list-disc ml-5 space-y-2">
      {project.points.map((point, index) => (
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

const AllProject = () => {
  return (
    <div className="allProject">
      <div className="left hidden">
        <Sidebar />
      </div>
      <div className="center">
          <div className="verticalTimeLine mt-5">
            <VerticalTimeline>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </VerticalTimeline>
          </div>
      </div>
      <div className="right hidden sm:block">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
};

export default AllProject;
