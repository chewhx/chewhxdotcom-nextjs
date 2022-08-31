import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import technologist from "../assets/technologist.png";
import singapore from "../assets/singapore.png";
import nerdface from "../assets/nerdface.png";
import zippermouth from "../assets/zippermouth.png";
import memoji from "../assets/memoji.png";
import {
  ActionIcon,
  Avatar,
  Card,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
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

const codeLanguages = [
  {
    label: "JavaScript",
    classNames: "bg-warning text-dark",
  },
  {
    label: "Typescript",
    classNames: "bg-primary",
  },
  {
    label: "React",
    classNames: "text-info border border-info",
  },
  {
    label: "Node/Express",
    classNames: "text-success border border-success",
  },
  {
    label: "NestJS",
    classNames: "text-danger border border-danger",
  },
];

const Emoji = ({ src }: ImageProps) => (
  <div
    style={{
      display: "inline-flex",
      padding: "0 0.3em",
      alignContent: "center",
    }}
  >
    <Image src={src} width="20px" height="20px" alt={`${src}-emoji`} />
  </div>
);

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
          <h2 style={{ margin: 0 }}>Chew Han Xiang</h2>
          <p style={{ margin: 0 }}>Software Engineer, Generalist, INTJ</p>
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
