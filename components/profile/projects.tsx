import { NextPage } from "next";
import React from "react";
import { FaNpm } from "react-icons/fa";
import TreeItem from "./tree-item";

const projects = [
  {
    icon: FaNpm,
    link: "https://www.npmjs.com/package/@chewhx/google-books",
    label: "@chewhx/google-books",
  },
  {
    icon: FaNpm,
    link: "https://www.npmjs.com/package/react-bootstrap-button",
    label: "react-bootstrap-button",
  },
];

const Projects: NextPage = () => {
  return (
    <>
      {projects.map((project: any) => (
        <TreeItem key={project.label}>
          <div className="col-10">
            <FaNpm className="me-3" fontSize={25} />
            <a href={project.link} target="_blank" rel="noreferrer">
              <span className="fw-bolder btn-link">{project.label}</span>
            </a>
          </div>
        </TreeItem>
      ))}
    </>
  );
};

export default Projects;
