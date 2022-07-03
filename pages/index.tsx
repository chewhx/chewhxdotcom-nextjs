import React from "react";
import type { NextPage } from "next";
import About from "./about";
import Project from "./project";
import Scribbles from "./scribbles";
import { getDatabase } from "../lib/notion";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import { getGitHubRepo } from "../lib/octokit";

interface Props {
  posts: any;
  repos: any;
}

const Home: NextPage<Props> = ({ posts, repos }) => {
  return (
    <>
      <About />
      <section className="py-3">
        <Project repos={repos} />
      </section>
      <section className="py-3">
        <h1 className="display-5">/ scribbles</h1>
        <div className="list-group list-group-flush py-4">
          {posts?.map((post: any) => (
            <ListGroup.Item className="px-0 py-3" key={post.id}>
              <Link href={`/scribbles/${post.id}`}>
                <a className="h2 link-primary">
                  {post?.properties?.Name?.title[0]?.plain_text}
                </a>
              </Link>
              <p className="lead">
                {post?.properties?.Tagline?.rich_text[0]?.plain_text}
              </p>
            </ListGroup.Item>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

const repos = [
  { owner: "chewhx", repo: "react-bootstrap-button" },
  {
    owner: "chewhx",
    repo: "dotfiles",
  },
  {
    owner: "chewhx",
    repo: "paynowqr",
  },
];

export const getStaticProps = async () => {
  const db = await getDatabase(process.env.NOTION_DATABASE_ID || "");
  const data = await Promise.all(
    repos.map(async ({ owner, repo }) => await getGitHubRepo(owner, repo))
  );
  return {
    props: {
      posts: db,
      repos: data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
