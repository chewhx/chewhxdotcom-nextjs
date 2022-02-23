import type { NextPage } from "next";
import Intro from "../components/profile/intro";
import Projects from "../components/profile/projects";
import TreeItems from "../components/profile/tree-items";

const Home: NextPage = () => {
  return (
    <div className="container h-100 d-flex">
      <div className="my-5 my-md-auto w-100 px-3 px-md-5">
        <Intro />
        <TreeItems />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
