import type { Meta, StoryObj } from "@storybook/react";
import { PropertyDefaultWrapper } from ".";

const meta: Meta<typeof PropertyDefaultWrapper> = {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PropertyDefaultWrapper>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
    layer: "/img/layer-1.svg",
  },
};
