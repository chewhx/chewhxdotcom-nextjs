import React from "react";
import { Anchor, Box, Divider, Grid, Group, Image, Text } from "@mantine/core";
import Link from "next/link";
import { getBookHighlights } from "../lib/mongo";
import { Highlight } from "../types/highlight.type";
import Label from "../layout/Label";
import { TbHighlight } from "react-icons/tb";

interface Props {
  highlights: Highlight[];
}

const Highlights = ({ highlights }: Props) => {
  return (
    <>
      <Grid py="lg">
        <Grid.Col sm={2}>
          <Label>/ highlights</Label>
        </Grid.Col>

        <Grid.Col sm={10}>
          <Text size="sm">
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
          </Text>

          {highlights?.map((each) => (
            <Link passHref href={`/highlights/${each?.id}`} key={each?.id}>
              <Anchor sx={{ fontWeight: 500 }}>
                <Group my="sm" spacing={4}>
                  <TbHighlight />
                  <Text>
                    {each?.title} by {each?.author}
                  </Text>
                </Group>
              </Anchor>
            </Link>
          ))}
        </Grid.Col>
      </Grid>
    </>
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
