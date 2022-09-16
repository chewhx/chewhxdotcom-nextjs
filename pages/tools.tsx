import React from "react";
import { Anchor, Box, Grid, Group, Text } from "@mantine/core";
import { TbTools } from "react-icons/tb";
import Label from "../layout/Label";
import { getGitHubRepo } from "../lib/octokit";

interface Props {
  repos?: any[];
}

export const toolingRepos = [
  { owner: "chewhx", repo: "project-cli" },
  { owner: "chewhx", repo: "notion-books" },
  { owner: "chewhx", repo: "cra-template-chewhx" },
];

const Tools = ({ repos }: Props) => {
  return (
    <Grid py="lg">
      <Grid.Col sm={2}>
        <Label>/ tools</Label>
      </Grid.Col>
      <Grid.Col sm={10}>
        {repos?.map(({ data }) => (
          <Box key={data?.id} mb="lg">
            <Group spacing={4}>
              <TbTools />
              <Anchor
                href={data?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 600 }}
                color="dark"
              >
                {data?.name}
              </Anchor>
            </Group>
            <Text size="sm">{data?.description}</Text>
          </Box>
        ))}
      </Grid.Col>
    </Grid>
  );
};

export default Tools;

export const getStaticProps = async () => {
  const data = await Promise.all(
    toolingRepos.map(
      async ({ owner, repo }) => await getGitHubRepo(owner, repo)
    )
  );
  return {
    props: {
      repos: data,
    },
    revalidate: 60,
  };
};
