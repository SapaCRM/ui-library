import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "Font/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Heading",
    variant: "h1",
  },
};
