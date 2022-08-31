import { Anchor, Box } from "@mantine/core";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "3em 0" }}>
      <Box>
        <p>
          By Chew Han Xiang. Created with{" "}
          <Anchor
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </Anchor>
          . Hosted on{" "}
          <Anchor
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </Anchor>
          . Scribbles are hosted on{" "}
          <Anchor
            href="https://www.notion.so/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion
          </Anchor>
          .
        </p>
      </Box>
    </footer>
  );
};

export default Footer;
