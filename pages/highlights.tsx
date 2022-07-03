import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mongo, { getBookHighlights } from "../lib/mongo";
import parse from "html-react-parser";
import Link from "next/link";

interface Props {
  highlights: any[];
}

const Highlights = ({ highlights }: Props) => {
  return (
    <Container className="px-0" style={{ padding: "0 5em" }}>
      <h1 className="display-5">/ book highlights</h1>
      <h5 className="p-4">
        Inspired by{" "}
        <a
          href="https://highlights.sawyerh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sawyer Hollenshead
        </a>{" "}
        and{" "}
        <a
          href="https://aliabdaal.com/book-notes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ali Abdaal
        </a>{" "}
        . Posting my book highlights to share with the world.
      </h5>
      <div className="grid">
        {highlights?.map((each) => (
          <div
            // style={{ height: "240px", position: "relative" }}
            className="g-col-6 g-col-md-3 highlight-bookcover-1 m-2"
            key={each.id}
          >
            <div style={{ height: "240px", position: "relative" }}>
              <Link passHref href={`/highlights/${each.id}`}>
                <Image
                  src={each.bookCover}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="btn btn-link"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Highlights;

export const getStaticProps = async () => {
  const highlights = await getBookHighlights();
  return {
    props: {
      highlights,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
};
