/* eslint-disable react/function-component-definition */

import { Story } from "@storybook/react";
import { TestProviders } from "__tests__/_/Provider";
import { Tabs, IProps } from ".";

const Content = ({ label }: { label: string }) => {
  return <p>{label}</p>;
};

export default {
  title: "Components/Tabs",
  component: Tabs,
  args: {
    contents: [
      {
        label: "Foo",
        content: <Content label="Foo" />,
      },
      {
        label: "Bar",
        overrideLabel: "Override Label",
        content: <Content label="Bar" />,
      },
      {
        label: "Baz",
        content: <Content label="Baz" />,
      },
      {
        label: "Disabled",
        content: <Content label="Bar" />,
        disabled: true,
      },
    ],
  },
};

const Template: Story<IProps> = (args) => (
  <TestProviders>
    <Tabs {...args} />
  </TestProviders>
);

export const Default = Template.bind({});
Default.args = {};

export const NoContentPaddding = Template.bind({});
NoContentPaddding.args = {
  padContent: false,
};
