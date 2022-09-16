import React from "react";
import { Anchor, Box, Divider } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { route } = useRouter();
  const isHome = route === "/";

  return (
    <Box my="xl" hidden={isHome}>
      <Link passHref href="/">
        <Anchor color="dark" sx={{ fontWeight: 600 }}>
          chewhx.com
        </Anchor>
      </Link>
      <Divider my="lg" />
    </Box>
  );
};

export default Navbar;
