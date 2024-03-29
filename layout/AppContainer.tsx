import { Box, Container, MantineProvider } from "@mantine/core";
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
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: `Satoshi, Space Grotesk,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        }}
      >
        <Container style={{ maxWidth: "850px" }}>
          <Navbar />
          <Box
            component="main"
            sx={{ minHeight: "calc(100vh - 45.8px - 200px)" }}
          >
            {children}
          </Box>
          <Footer />
        </Container>
      </MantineProvider>
    </>
  );
};

export default AppContainer;
