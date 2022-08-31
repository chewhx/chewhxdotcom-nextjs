import { Box } from "@mantine/core";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "3em 0" }}>
      <Box>
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
      </Box>
    </footer>
  );
};

export default Footer;
