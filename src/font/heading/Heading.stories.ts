import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";
const meta = {
  title: "Font/Heading",
  component: Heading,
  tags: ["autodocs"],
};
export default meta;

export const Primary = {
  render: () => <Heading text="Hello" variant="h2" />,
};
