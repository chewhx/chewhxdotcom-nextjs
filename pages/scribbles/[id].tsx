import { useRouter } from "next/router";
import React from "react";
import { getBlocks, getDatabase, getPage } from "../../lib/notion";
import { Render } from "@9gustin/react-notion-render";
import dayjs from "dayjs";
import { Badge, Button, Stack } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { NextPage } from "next";

interface Props {
  page: any;
  blocks: any;
}

const EachScribble: NextPage<Props> = ({ page, blocks }) => {
  const router = useRouter();
  return (
    <>
      <Button
        className="mb-4"
        variant="outline-primary"
        onClick={() => router.back()}
      >
        <FaChevronLeft className="mb-1 me-2" />
        Back
      </Button>
      <article>
        <div className="mb-5">
          <h1 className="display-5 mb-4 text-dark fw-700">
            {page?.properties?.Name?.title[0].plain_text}
          </h1>
          <Stack direction="horizontal" gap={3}>
            <p>
              📅 Created on{" "}
              {dayjs(page.created_time).format("DD MMM YYYY, HH:mm A")}
            </p>
            <p>
              ✏️ Updated on{" "}
              {dayjs(page.updated_time).format("DD MMM YYYY, HH:mm A")}
            </p>
          </Stack>
          {page?.properties?.Tags?.multi_select && (
            <Stack direction="horizontal" gap={2}>
              {page?.properties?.Tags?.multi_select.map((e: any) => (
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
        </div>
        {page && <Render blocks={blocks.results} simpleTitles />}
      </article>
      {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(blocks, null, 2)}</pre> */}
    </>
  );
};

export default EachScribble;

export const getStaticPaths = async () => {
  const db = await getDatabase(process.env.NOTION_DATABASE_ID || "");
  return {
    paths: db.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  // const childBlocks = await Promise.all(
  //   blocks
  //     .filter((block) => block.has_children)
  //     .map(async (block) => {
  //       return {
  //         id: block.id,
  //         children: await getBlocks(block.id),
  //       };
  //     })
  // );
  // const blocksWithChildren = blocks.map((block) => {
  //   // Add child blocks if the block should contain children but none exists
  //   if (block.has_children && !block[block.type].children) {
  //     block[block.type]["children"] = childBlocks.find(
  //       (x) => x.id === block.id
  //     )?.children;
  //   }
  //   return block;
  // });

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
