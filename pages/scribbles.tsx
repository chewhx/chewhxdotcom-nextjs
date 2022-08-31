import { Anchor, Grid, Text } from "@mantine/core";
import Link from "next/link";
import Label from "../layout/Label";
import { getDatabase } from "../lib/notion";
// import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  posts?: any[];
}

const Scribbles = ({ posts }: Props) => {
  return (
    <>
      <Grid py="lg" justify="flex-start">
        <Grid.Col sm={2}>
          <Label>/ scribbles</Label>
        </Grid.Col>
        <Grid.Col sm={10}>
          <Grid>
            {posts?.map((post) => (
              <Grid.Col key={post.id}>
                <Link passHref href={`/scribbles/${post.id}`}>
                  <Anchor style={{ fontWeight: 600 }}>
                    {post?.properties?.Name?.title[0]?.plain_text + "  "}
                    &#8594;
                  </Anchor>
                </Link>
                <Text size="sm">
                  {post?.properties?.Tagline?.rich_text[0]?.plain_text}
                </Text>
                {/* {post?.properties?.Tags?.multi_select && (
                  <Group>
                    {post?.properties?.Tags?.multi_select.map((e: any) => (
                      <Badge
                        bg="white"
                        className="text-dark border border-dark"
                        key={e.name}
                      >
                        {e.name}
                      </Badge>
                    ))}
                  </Group>
                )} */}
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
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
