import React from "react";
import { Render } from "@9gustin/react-notion-render";
import { Chip, Group, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { TbCalendar, TbPencil } from "react-icons/tb";
import { getBlocks, getDatabase, getPage } from "../../lib/notion";

interface Props {
  page: any;
  blocks: any;
}

const EachScribble: NextPage<Props> = ({ page, blocks }) => {
  const router = useRouter();
  return (
    <>
      <article>
        <div className="mb-5">
          <Title sx={{ fontSize: "3rem" }} my="lg">
            {page?.properties?.Name?.title[0].plain_text}
          </Title>
          <Group>
            <Group spacing={4}>
              <TbCalendar />
              <Text size="sm">
                {dayjs(page?.created_time).format("DD MMM YYYY, HH:mm A")}
              </Text>
            </Group>
            <Group spacing={4}>
              <TbPencil />
              <Text size="sm">
                {dayjs(page?.updated_time).format("DD MMM YYYY, HH:mm A")}
              </Text>
            </Group>
          </Group>
          {page?.properties?.Tags?.multi_select && (
            <Stack my="md">
              <Chip.Group>
                {page?.properties?.Tags?.multi_select.map((e: any) => (
                  <Chip size="xs" key={e.name}>
                    {e.name}
                  </Chip>
                ))}
              </Chip.Group>
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
    revalidate: 60,
  };
};
