import React from "react";

const Footer = () => {
  return (
    <footer className="py-5">
      <div
        className="container mx-auto px-5 px-lg-0"
        style={{ maxWidth: "900px" }}
      >
        <p>
          By Chew Han Xiang. Created with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          . Styled with{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
          . Scribbles are hosted on{" "}
          <a
            href="https://www.notion.so/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
