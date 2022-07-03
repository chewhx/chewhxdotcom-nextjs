import React from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { getGitHubRepo } from "../lib/octokit";
import { Badge, Image, Stack } from "react-bootstrap";

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

interface Props {
  repos: any[];
}

const Project = ({ repos }: Props) => {
  return (
    <>
      <h1 className="display-5">/ project</h1>
      <span>
        Projects data fetched from{" "}
        <a
          href="https://docs.github.com/en/rest/repos/repos#get-a-repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          github api
        </a>{" "}
      </span>
      {/* <pre>{JSON.stringify(repos, null, 2)}</pre> */}
      <div className="list-group list-group-flush">
        {repos.map(({ data }) => (
          <div className="list-group-item p-0 py-5" key={data.id}>
            <h2>
              <BsGithub className="me-4" />
              {data?.language === "Shell" ? (
                <Image
                  className="me-4"
                  width="40px"
                  alt={data?.language}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                />
              ) : data?.language === "TypeScript" ? (
                <Image
                  className="me-4"
                  width="40px"
                  alt={data?.language}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                />
              ) : null}
              <a
                href={data?.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.name}
              </a>
            </h2>
            <p className="lead text-secondary">{data?.description}</p>
            <Stack className="flex-wrap" direction="horizontal" gap={2}>
              {data?.topics?.map((topic: string) => (
                <Badge pill bg="white" className="text-dark border" key={topic}>
                  {topic}
                </Badge>
              ))}
            </Stack>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;

export const getStaticProps = async () => {
  const data = await Promise.all(
    repos.map(async ({ owner, repo }) => await getGitHubRepo(owner, repo))
  );
  return {
    props: {
      repos: data,
    },
    revalidate: 60,
  };
};
