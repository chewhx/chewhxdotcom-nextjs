import {
  Button,
  Group,
  Modal,
  Stack,
  Textarea,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { FaAddressCard, FaInbox } from "react-icons/fa";

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Connect = ({ opened, setOpened }: Props) => {
  const { colors } = useMantineTheme();
  const { getInputProps, values } = useForm({
    initialValues: {
      name: "",
      message: "",
      contact: "",
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={
        <Group style={{ color: colors.blue[6] }} align="center">
          <FaAddressCard fontSize="1.5rem" />
          <h3>
            <span>{"Let's Connect!"}</span>
          </h3>
        </Group>
      }
      centered
      size="md"
    >
      <Stack>
        <TextInput
          data-autoFocus
          label="Hello, my name is"
          placeholder="John Doe"
          {...getInputProps("name")}
        />
        <Textarea
          label="I am interested to speak with you about"
          placeholder="potential job opportunity, collaborate with you, have a chat about your experience..."
          {...getInputProps("message")}
        />
        <TextInput
          label="My contact details are"
          placeholder="Mobile Number, Email, or LinkedIn profile"
          {...getInputProps("contact")}
        />
        <Button leftIcon={<FaInbox />}>Drop message</Button>
      </Stack>
    </Modal>
  );
};

export default Connect;
