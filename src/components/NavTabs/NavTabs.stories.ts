import type { Meta, StoryObj } from "@storybook/react";
import { NavTabs } from ".";

const meta: Meta<typeof NavTabs> = {
  title: "Components/NavTabs",
  component: NavTabs,

  argTypes: {
    property1: {
      options: ["MAP"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavTabs>;

export const Default: Story = {
  args: {
    property1: "MAP",
    className: {},
    icon: "/img/icon.svg",
    layer: "/img/layer-1-1.svg",
    img: "/img/icon-1.svg",
    icon1: "/img/icon-2.svg",
  },
};
