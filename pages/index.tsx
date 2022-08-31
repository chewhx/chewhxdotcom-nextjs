import React from "react";
import type { NextPage } from "next";
import { getBookHighlights } from "../lib/mongo";
import { getDatabase } from "../lib/notion";
import { getGitHubRepo } from "../lib/octokit";
import About from "./about";
import Highlights from "./highlights";
import Projects, { projectRepos } from "./projects";
import Scribbles from "./scribbles";

interface Props {
  posts: any;
  repos: any;
  highlights: any;
}

const Home: NextPage<Props> = ({ posts, repos, highlights }) => {
  return (
    <>
      <About />
      <Projects repos={repos} />
      <Scribbles posts={posts} />
      <Highlights highlights={highlights} />
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
  const highlights = await getBookHighlights();
  return {
    props: {
      posts: db,
      repos: data,
      highlights,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
