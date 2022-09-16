import React from "react";
import { Anchor, Box, Grid, Group, Text } from "@mantine/core";
import Link from "next/link";
import { TbPackage } from "react-icons/tb";
import { getGitHubRepo } from "../lib/octokit";
import Label from "../layout/Label";

interface Props {
  repos?: any[];
}

const Projects = ({ repos }: Props) => {
  return (
    <Grid py="lg">
      <Grid.Col sm={2}>
        <Label>/ projects</Label>
      </Grid.Col>
      <Grid.Col sm={10}>
        {repos?.map(({ data }) => (
          <Box key={data?.id} mb="lg">
            <Link passHref href={data?.html_url}>
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 600 }}
              >
                <Group spacing={4}>
                  <TbPackage />
                  {data?.name}
                </Group>
              </Anchor>
            </Link>
            <Text size="sm">{data?.description}</Text>
          </Box>
        ))}
      </Grid.Col>
    </Grid>
  );
};

export default Projects;

export const projectRepos = [
  { owner: "chewhx", repo: "use-todo" },
  { owner: "chewhx", repo: "react-bootstrap-button" },
  {
    owner: "chewhx",
    repo: "dotfiles",
  },
  { owner: "chewhx", repo: "google-books" },
  {
    owner: "chewhx",
    repo: "paynowqr",
  },
  {
    owner: "chewhx",
    repo: "javascript-dsa-masterclass",
  },
];
export const getStaticProps = async () => {
  const data = await Promise.all(
    projectRepos.map(
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
