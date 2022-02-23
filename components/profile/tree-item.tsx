import { NextPage } from "next";
import React, { HTMLAttributes } from "react";

const TreeItem: NextPage<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div
      className={`row font-monospace bg-light px-3 py-2 mx-0 my-3 rounded-3`}
    >
      {children}
    </div>
  );
};

export default TreeItem;
