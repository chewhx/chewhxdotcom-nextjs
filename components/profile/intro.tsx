import { NextPage } from "next";
import React from "react";
import Socials from "./socials";

const intro = {
  greeting: "👋🏻 Bonjour.",
  oneliner: "I'm Han Xiang. Software Developer.",
  summary:
    "Several hundred git commits ago, I was managing art programmes and studying for an accountancy degree. Now I'm a junior frontend developer on an agile team. We are sprinting towards the next generation of financial × technology solutions for freelancers and self-employed.",
};

const Intro: NextPage = () => {
  return (
    <>
      <h1
        className="fw-900"
        style={{ fontSize: "4rem", letterSpacing: "-0.05rem" }}
      >
        {intro.greeting}
      </h1>
      <h1
        className="fw-900"
        style={{ fontSize: "2.5rem", letterSpacing: "-0.05rem" }}
      >
        {intro.oneliner}
      </h1>
      <Socials />
      <h5 className="fw-500 lh-base py-2" style={{ letterSpacing: "0.03rem" }}>
        {intro.summary}
      </h5>
    </>
  );
};

export default Intro;
