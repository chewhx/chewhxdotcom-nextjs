import { Anchor, Box, Grid, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { TbApps } from "react-icons/tb";
import Label from "../layout/Label";

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
            <Link passHref href={data?.html_url}>
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 600 }}
              >
                <Group spacing={4}>
                  <TbApps />
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

export default Tools;
