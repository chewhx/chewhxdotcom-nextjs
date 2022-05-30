import React from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const projects = [
  {
    title: "LytePay for Freelancers",
    tagline: "Financing solution for freelancers and self-employed",
    links: [
      {
        icon: <BsGlobe />,
        link: "https://www.lytepay.co/freelancers/",
      },
    ],
  },
  {
    title: "Bookstrap",
    tagline: "Web application to curate reading list",
    links: [
      {
        icon: <BsGlobe />,
        link: "https://bookstrap-staging.netlify.app",
      },
    ],
  },
  {
    title: "React-Bootstrap-Button",
    tagline: "Quick save for adding bootstrap loading button on React",
    links: [
      {
        icon: <FaNpm />,
        link: "https://www.npmjs.com/package/react-bootstrap-button",
      },
    ],
  },
  {
    title: ".dotfiles",
    tagline: "My personal dotfiles",
    links: [{ icon: <FaGithub />, link: "https://github.com/chewhx/dotfiles" }],
  },
];

const Project = () => {
  return (
    <>
      <h1 className="display-5">/ project</h1>
      <div className="list-group list-group-flush py-4">
        {projects.map(({ title, tagline, links }) => (
          <div className="list-group-item p-0 py-3" key={title}>
            <h2>{title}</h2>
            <p className="lead text-secondary">{tagline}</p>
            {links.map(({ icon, link }) => (
              <a
                className="btn btn-outline-dark"
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
