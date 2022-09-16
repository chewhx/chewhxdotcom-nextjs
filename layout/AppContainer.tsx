import { Container, MantineProvider } from "@mantine/core";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppContainer: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<"light" | "dark">(
    "light"
  );

  React.useEffect(() => {
    const preferDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (preferDarkTheme) {
      setColorScheme("dark");
    }
  }, []);

  const toggleColorScheme = () =>
    colorScheme === "light" ? setColorScheme("dark") : setColorScheme("light");

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
          colorScheme,
          fontFamily: `Satoshi, Space Grotesk,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        }}
      >
        <Container style={{ maxWidth: "850px" }}>
          <Navbar
            toggleColorScheme={toggleColorScheme}
            colorScheme={colorScheme}
          />
          <main>{children}</main>
          <Footer />
        </Container>
      </MantineProvider>
    </>
  );
};

export default AppContainer;
