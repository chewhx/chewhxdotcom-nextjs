import Link from "next/link";
import React from "react";
import { Badge, ListGroup, Stack } from "react-bootstrap";
import { getDatabase } from "../lib/notion";
// import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  posts?: any[];
}

const Scribbles = ({ posts }: Props) => {
  return (
    <>
      <h1 className="display-5">/ scribbles</h1>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <div className="list-group list-group-flush py-4">
        {posts?.map((post) => (
          <ListGroup.Item className="px-0 py-4" key={post.id}>
            <Link href={`/scribbles/${post.id}`}>
              <a className="h2 link-primary">
                {post?.properties?.Name?.title[0]?.plain_text}
              </a>
            </Link>
            <p className="lead">
              {post?.properties?.Tagline?.rich_text[0]?.plain_text}
            </p>
            {post?.properties?.Tags?.multi_select && (
              <Stack direction="horizontal" gap={2}>
                {post?.properties?.Tags?.multi_select.map((e: any) => (
                  <Badge
                    bg="white"
                    className="text-dark border border-dark"
                    key={e.name}
                  >
                    {e.name}
                  </Badge>
                ))}
              </Stack>
            )}
          </ListGroup.Item>
        ))}
      </div>
    </>
  );
};
export default Scribbles;

export const getStaticProps = async () => {
  const db = await getDatabase(process.env.NOTION_DATABASE_ID || "");
  return {
    props: {
      posts: db,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
};
