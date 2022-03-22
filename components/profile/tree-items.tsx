import { NextPage } from "next";
import React from "react";
import TreeItem from "./tree-item";

const items = [
  {
    emoji: "🪴",
    content: "living/attitude/generalist",
    length: 3,
    links: [null, null, "https://davidepstein.com/the-range/"],
  },
  {
    emoji: "🙃",
    content: "personality/MBTI/INTJ",
    length: 3,
    links: [null, null, "https://www.16personalities.com/intj-personality"],
  },
  {
    emoji: "👨🏻‍💻",
    content: "job/@lyte_ventures/frontend developer",
    length: 3,
    links: [null, "https://www.lyteventures.com/", null],
  },
  {
    emoji: "🩸",
    content: "type/javascript/typescript/nodejs/reactjs/nestjs",
    length: 6,
    links: [null, null, null],
  },
];

const TreeItems: NextPage = () => {
  return (
    <>
      {items.map((item: any) => (
        <TreeItem key={item.content}>
          <div className="col-auto px-1">{item.emoji}</div>
          {item.content.split("/").map((each: string, idx: number) => (
            <div className="col-auto px-1" key={each}>
              {item.links[idx] ? (
                <a
                  href={item.links[idx]}
                  className="fw-600 btn-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {each}
                </a>
              ) : (
                each
              )}{" "}
              {idx < item.length - 1 && "/"}
            </div>
          ))}
        </TreeItem>
      ))}
    </>
  );
};

export default TreeItems;
