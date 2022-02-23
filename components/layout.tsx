import Head from "next/head";
import React, { FC } from "react";

const styles = {
  main: {
    maxWidth: "900px",
  },
};

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>chewhx.com - chewwwd</title>
        <meta name="description" content="Personal site of Chew Han Xiang" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <main className="mx-auto my-0 vh-100" style={styles.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
