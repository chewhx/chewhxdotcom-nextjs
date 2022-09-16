import React from "react";
import { Render } from "@9gustin/react-notion-render";
import { Box, Chip, Group, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import { NextPage } from "next";
import { TbCalendar, TbPencil } from "react-icons/tb";
import { getBlocks, getDatabase, getPage } from "../../lib/notion";
import { useRouter } from "next/router";

interface Props {
  page: any;
  blocks: any;
}

const EachScribble: NextPage<Props> = ({ page, blocks }) => {
  return (
    <>
      <article>
        <Box sx={{ textAlign: "center" }}>
          <Text size="lg" weight={500} align="center">
            {dayjs(page?.updated_time).format("DD MMM YYYY")}
          </Text>
          <Text sx={{ fontSize: "3.5rem" }} py="xl" align="center">
            {page?.properties?.Name?.title[0].plain_text}
          </Text>
          {page?.properties?.Tags?.multi_select && (
            <>
              {page?.properties?.Tags?.multi_select.map((e: any) => (
                <Text component="span" key={e.name}>
                  On {e.name + ", "}
                </Text>
              ))}
            </>
          )}
        </Box>
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
  try {
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
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
};
