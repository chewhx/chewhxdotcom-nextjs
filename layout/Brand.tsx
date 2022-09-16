import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";
import memoji from "../assets/memoji.png";

const socials = [
  {
    icon: <TbBrandLinkedin size="20" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chewhx/",
  },
  {
    icon: <TbBrandFacebook size="20" />,
    label: "Facebook",
    link: "https://www.facebook.com/chew.h.xiang",
  },
  {
    icon: <TbBrandGithub size="20" />,
    label: "GitHub",
    link: "https://github.com/chewhx",
  },
];

const Brand = () => {
  const theme = useMantineTheme();
  return (
    <Group style={{ margin: "1.5em 0 " }}>
      {/* <Box
        sx={{
          backgroundColor: theme.colors.blue[0],
          width: "fit-content",
          padding: "0.5em 0.5em 0.3em",
          alignSelf: "center",
          borderRadius: "50%",
        }}
      >
        <Image
          src={memoji}
          alt="memoji"
          objectFit="cover"
          height="60px"
          width="60px"
        />
      </Box> */}
      <Stack spacing={0} justify="center">
        <h1 style={{ fontSize: "3rem", fontWeight: 600, margin: 0 }}>
          Chew Han Xiang
        </h1>
        <Text sx={{ fontSize: "1.55rem" }} weight={500}>
          Software Engineer, Generalist, INTJ
        </Text>
        <Group my="md">
          {socials.map(({ label, link, icon }) => (
            <Box key={label}>
              <Anchor href={link} target="_blank" rel="noopener noreferrer">
                <ActionIcon size="lg" radius="md" variant="light">
                  {icon}
                </ActionIcon>
              </Anchor>
            </Box>
          ))}
        </Group>
      </Stack>
    </Group>
  );
};

export default Brand;
