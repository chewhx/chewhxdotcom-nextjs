import React from "react";
import {
  ActionIcon,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image, { ImageProps } from "next/image";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import memoji from "../assets/memoji.png";
import Label from "../layout/Label";

const socials = [
  {
    icon: <BsLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chewhx/",
  },
  {
    icon: <BsFacebook />,
    label: "Facebook",
    link: "https://www.facebook.com/chew.h.xiang",
  },
  {
    icon: <BsGithub />,
    label: "GitHub",
    link: "https://github.com/chewhx",
  },
];

const About = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Group style={{ margin: "1.5em 0 3em" }}>
        <div
          style={{
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
            height="80px"
            width="80px"
          />
        </div>
        <Stack spacing={0} justify="center">
          <Title>Chew Han Xiang</Title>
          <Text>Software Engineer, Generalist, INTJ</Text>
          <Group>
            {socials.map(({ label, link, icon }) => (
              <div className="col-auto" key={label}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="align-content-center border-0 rounded-circle"
                >
                  <ActionIcon size="lg" radius="md" color="blue">
                    {icon}
                  </ActionIcon>
                </a>
              </div>
            ))}
          </Group>
        </Stack>
      </Group>
      <Grid py="lg">
        <Grid.Col sm={2}>
          <Label>/ about</Label>
        </Grid.Col>
        <Grid.Col sm={7}>
          <Text mb="xs">
            I&apos;m a developer based in Singapore. Before that, I studied
            accountancy and managed art programmes.
          </Text>
          <Text mb="xs">
            I&apos;m interested in fintech, productivity, leading a healthy life
            and leaving the world better than I found it.
          </Text>
          <Text mb="xs">Open to remote and freelance work.</Text>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default About;
