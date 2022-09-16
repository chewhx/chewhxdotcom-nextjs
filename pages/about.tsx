import { Grid, Text } from "@mantine/core";
import Label from "../layout/Label";

const About = () => {
  return (
    <Grid py="lg">
      <Grid.Col sm={2}>
        <Label>/ about</Label>
      </Grid.Col>
      <Grid.Col sm={7}>
        <Text mb="xs" weight={500}>
          I&apos;m a developer based in Singapore. Before that, I studied
          accountancy and managed art programmes.
        </Text>
        <Text mb="xs" weight={500}>
          I&apos;m interested in fintech, productivity, leading a healthy life
          and leaving the world better than I found it.
        </Text>
        <Text mb="xs" weight={500}>Open to remote and freelance work.</Text>
      </Grid.Col>
    </Grid>
  );
};

export default About;
