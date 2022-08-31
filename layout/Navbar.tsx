import { ActionIcon, Container, Grid, Group, Switch } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaAddressCard, FaChevronLeft, FaHighlighter } from "react-icons/fa";
import Connect from "../components/LetsConnect";

interface Props {
  toggleColorScheme: () => void;
  colorScheme: "dark" | "light";
}

const Navbar = ({ toggleColorScheme, colorScheme }: Props) => {
  const [opened, setOpened] = React.useState<boolean>(false);
  const { route } = useRouter();
  const isDark = colorScheme === "dark";
  const isHome = route === "/";

  const navLinks = React.useMemo(
    () => [
      {
        id: "book-highlights",
        icon: <FaHighlighter />,
        label: "Book Highlights",
        props: { color: "yellow", variant: "subtle" },
        type: "link",
        href: "/highlights",
      },
      {
        id: "lets-connect",
        icon: <FaAddressCard />,
        label: "Let's Connect",
        props: { color: "blue", variant: "subtle" },
        type: "action",
        onClick: () => setOpened((p) => !p),
      },
    ],
    []
  );

  return (
    <Container py="xl">
      <Connect opened={opened} setOpened={setOpened} />
      <Grid>
        {/* <Grid.Col span={6} p={0}>
          {!isHome && (
            <Link passHref href="/">
              <ActionIcon variant="subtle" style={{ display: "inline-flex" }}>
                <FaHome />
              </ActionIcon>
            </Link>
          )}
          {isBroken && (
            <Menu position="bottom-start">
              <Menu.Target>
                <ActionIcon style={{ display: "inline-flex" }}>
                  <FaBars />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {navLinks.map(({ icon, label, props, href, id, type }) => {
                  switch (type) {
                    case "link":
                      return (
                        <Link passHref key={id} href={href || ""}>
                          <Menu.Item icon={icon} color={props.color}>
                            {label}
                          </Menu.Item>
                        </Link>
                      );
                    case "action":
                      return (
                        <Menu.Item
                          key={id}
                          icon={icon}
                          color={props.color}
                          onClick={() => setOpened((p) => !p)}
                        >
                          {label}
                        </Menu.Item>
                      );

                    default:
                      return null;
                  }
                })}
              </Menu.Dropdown>
            </Menu>
          )}
          {!isBroken &&
            navLinks.map(({ icon, label, props, href, id, type }) => {
              switch (type) {
                case "link":
                  return (
                    <Link passHref href={href || ""} key={id}>
                      <Button
                        leftIcon={icon}
                        color={props.color}
                        variant={props.variant as ButtonVariant}
                      >
                        {label}
                      </Button>
                    </Link>
                  );
                case "action":
                  return (
                    <Button
                      key={id}
                      leftIcon={icon}
                      color={props.color}
                      variant={props.variant as ButtonVariant}
                      onClick={() => setOpened((p) => !p)}
                    >
                      {label}
                    </Button>
                  );

                default:
                  return null;
              }
            })}
        </Grid.Col> */}
        <Group spacing={20}>
          {!isHome && (
            <Link passHref href="/">
              <ActionIcon variant="outline">
                <FaChevronLeft />
              </ActionIcon>
            </Link>
          )}
          <Switch
            color="gray"
            checked={isDark}
            onChange={toggleColorScheme}
            size="md"
            onLabel="D"
            offLabel="L"
          />
        </Group>
      </Grid>
    </Container>
  );
};

export default Navbar;
