import { NextPage } from "next";
import React from "react";

const socials = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chewhx/",
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/chew.h.xiang",
  },
  {
    label: "GitHub",
    link: "https://github.com/chewhx",
  },
];

const Socials: NextPage = () => {
  return (
    <ul className="list-unstyled list-inline text-primary my-4">
      {socials.map((social: any) => (
        <li className="list-inline-item me-5 h6 m-0" key={social.label}>
          <a href={social.link} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
