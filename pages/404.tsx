import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AppContainer from "../layout/AppContainer";

const NotFound: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return (
    <div className="container h-100 d-flex">
      <div className="my-5 my-md-auto w-100 px-3 px-md-5">
        <h1>404</h1>
      </div>
    </div>
  );
};

export default NotFound;
