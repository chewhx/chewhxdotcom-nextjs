// import Image from "next/image";
import React from "react";
import { getBookHighlightById, getBookHighlights } from "../../lib/mongo";
import parse from "html-react-parser";
import { NextPage } from "next";
import { Highlight } from "../../types/highlight.type";
import { Container, Image, Stack } from "@mantine/core";

interface Props {
  highlight: Highlight;
}

const EachHighlight: NextPage<Props> = ({ highlight }) => {
  return (
    <Container>
      <div
        style={{ height: "340px", position: "relative" }}
        className="highlight-bookcover"
      >
        <Image
          src={highlight?.bookCover}
          alt={highlight?.title}
          fit="contain"
          height={300}
        />
      </div>
      <Stack spacing="xs" style={{ textAlign: "center" }} my="xl">
        <h4>{highlight?.title}</h4>
        <h5>{highlight?.author}</h5>
        <p className="py-3 text-danger">
          🙇🏻‍♂️ No copyright infringement intended
        </p>
        <h5 className="my-3">{highlight?.date}</h5>
      </Stack>
      <article>{parse(highlight?.htmlText || "")}</article>
    </Container>
  );
};

export default EachHighlight;

export const getStaticPaths = async () => {
  const db = await getBookHighlights();
  return {
    paths: db.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const highlight = await getBookHighlightById(id);
  return {
    props: {
      highlight,
    },
    revalidate: 60,
  };
};
