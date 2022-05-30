import Link from "next/link";
import React from "react";
import { Button, Stack } from "react-bootstrap";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const socials = [
  {
    icon: <BsLinkedin className="me-2 mb-1" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chewhx/",
  },
  {
    icon: <BsFacebook className="me-2 mb-1" />,
    label: "Facebook",
    link: "https://www.facebook.com/chew.h.xiang",
  },
  {
    icon: <BsGithub className="me-2 mb-1" />,
    label: "GitHub",
    link: "https://github.com/chewhx",
  },
];

const codeLanguages = [
  {
    label: "JavaScript",
    classNames: "bg-warning text-dark",
  },
  {
    label: "Typescript",
    classNames: "bg-primary",
  },
  {
    label: "React",
    classNames: "text-info border border-info",
  },
  {
    label: "Node/Express",
    classNames: "text-success border border-success",
  },
  {
    label: "NestJS",
    classNames: "text-danger border border-danger",
  },
];

const About = () => {
  return (
    <>
      <h1 className="display-3 py-4">Chew Han Xiang</h1>
      <p className="fs-3">
        Hello World. I am a 👨🏻‍💻 developer based in sunny 🇸🇬 Singapore . Before I
        started coding{" "}
        <span>
          {codeLanguages.map(({ label, classNames }, i) => (
            <span
              className={`badge ${classNames} ${
                i === codeLanguages.length - 1 ? "" : "me-2"
              }`}
              key={label}
            >
              {label}
            </span>
          ))}
        </span>{" "}
        , I was managing art programmes and studied for an accountancy degree.
      </p>
      <p className="fs-3">
        I&apos;m a self-proclaimed 🤓{" "}
        <a
          href="https://davidepstein.com/the-range"
          target="_blank"
          rel="noopener noreferrer"
        >
          generalist
        </a>{" "}
        and tested 🤐{" "}
        <a
          href="https://www.16personalities.com/intj-personality"
          target="_blank"
          rel="noopener noreferrer"
        >
          INTJ
        </a>
        . I&apos;m interested in fintech, productivity, leading a healthy life
        and leaving the world better than I found it.
      </p>
      <p className="fs-3">
        Currently a frontend developer at {" "}
        <a
          href="https://www.lyteventures.com/"
          target="_blank"
          className="link-info"
          rel="noopener noreferrer"
        >
          Lyte Ventures
        </a>
      </p>
      <Stack direction="horizontal" className="my-5" gap={3}>
        {socials.map(({ label, link, icon }) => (
          <div className="col-auto" key={label}>
            <Button
              variant="outline-dark"
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="align-content-center"
            >
              {icon}
              <span>{label}</span>
            </Button>
          </div>
        ))}
      </Stack>
    </>
  );
};

export default About;
