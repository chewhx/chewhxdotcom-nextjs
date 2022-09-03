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
    <>
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
          {/* <Grid grow align="stretch">
            {repos?.map(({ data }) => (
              <Grid.Col xs={12} md={6} key={data.id}>
                <Card shadow="md" style={{ height: "100%" }} radius="md">
                  <Group spacing="xs">
                    {data?.language === "Shell" ? (
                      <Image
                        width="20px"
                        style={{ marginRight: "0.03em" }}
                        alt={data?.language}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                      />
                    ) : data?.language === "TypeScript" ? (
                      <Image
                        width="20px"
                        style={{ marginRight: "0.03em" }}
                        alt={data?.language}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      />
                    ) : null}

                    {data?.html_url && (
                      <a
                        href={data?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ActionIcon color="blue" variant="light">
                          <BsGithub className="me-2" />
                        </ActionIcon>
                      </a>
                    )}
                    {npmPackages[data?.name] && (
                      <a
                        href={npmPackages[data?.name]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ActionIcon color="red" variant="light">
                          <FaNpm className="me-2" />
                        </ActionIcon>
                      </a>
                    )}
                  </Group>
                  <h4 style={{ margin: "0.4em 0" }}>{data.name}</h4>
                  <small>{data?.description}</small>
                </Card>
              </Grid.Col>
            ))}
          </Grid> */}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Projects;

export const projectRepos = [
  { owner: "chewhx", repo: "react-bootstrap-button" },
  { owner: "chewhx", repo: "cra-template-chewhx" },
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
