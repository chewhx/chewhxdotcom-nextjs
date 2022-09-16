import React from "react";
import type { NextPage } from "next";
import { getBookHighlights } from "../lib/mongo";
import { getDatabase } from "../lib/notion";
import { getGitHubRepo } from "../lib/octokit";
import About from "./about";
import Highlights from "./highlights";
import Projects, { projectRepos } from "./projects";
import Scribbles from "./scribbles";
import Tools, { toolingRepos } from "./tools";
import Brand from "../layout/Brand";

interface Props {
  posts: any;
  repos: any;
  tools: any;
}

const Home: NextPage<Props> = ({ posts, repos, tools }) => {
  return (
    <>
      <Brand />
      <About />
      <Tools repos={tools} />
      <Projects repos={repos} />
      <Scribbles posts={posts} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const db = await getDatabase(process.env.NOTION_DATABASE_ID || "");
  
  const data = await Promise.all(
    projectRepos.map(
      async ({ owner, repo }) => await getGitHubRepo(owner, repo)
    )
  );

  const tools = await Promise.all(
    toolingRepos.map(
      async ({ owner, repo }) => await getGitHubRepo(owner, repo)
    )
  );

  return {
    props: {
      posts: db,
      repos: data,
      tools,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
};
