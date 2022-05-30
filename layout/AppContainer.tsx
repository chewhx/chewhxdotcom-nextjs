import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppContainer: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>chewhx.com - Chew Han Xiang - Software Developer</title>
        <meta name="description" content="Personal site of Chew Han Xiang" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <Navbar />
      <main
        className="container mx-auto px-5 px-lg-0"
        style={{ maxWidth: "900px", minHeight: "calc(100vh - 136px - 136px)" }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppContainer;
