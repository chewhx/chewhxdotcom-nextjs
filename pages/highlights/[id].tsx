import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { getBookHighlightById, getBookHighlights } from "../../lib/mongo";
import parse from "html-react-parser";
import { NextPage } from "next";
import { Highlight } from "../../types/highlight.type";

interface Props {
  highlight: Highlight;
}

const EachHighlight: NextPage<Props> = ({ highlight }) => {
  return (
    <Container className="px-0 px-md-5" style={{ padding: "0 5em" }}>
      <div
        style={{ height: "340px", position: "relative" }}
        className="highlight-bookcover"
      >
        <Image
          src={highlight?.bookCover}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="w-100 text-center py-5">
        <h4>{highlight?.title}</h4>
        <h5>{highlight?.author}</h5>
        <p className="py-3 text-danger">
          🙇🏻‍♂️ No copyright infringement intended
        </p>
        <h5 className="my-3">{highlight?.date}</h5>
      </div>
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
