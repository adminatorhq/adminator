/* eslint-disable react/function-component-definition */
import { useState } from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TestProviders } from "__tests__/_/Provider";
import { IntermediateCheckBox, IProps } from ".";

export default {
  title: "Components/IntermediateCheckBox",
  component: IntermediateCheckBox,
  args: {
    onClick: () => action("onClick"),
    label: "Label",
  },
};

const ControlledTemplate: Story<IProps> = (args) => {
  const [state, setState] = useState<IProps["state"]>("unchecked");
  return (
    <TestProviders>
      <IntermediateCheckBox
        {...args}
        state={state}
        onClick={() => {
          if (state === "checked") {
            setState("unchecked");
          } else if (state === "unchecked") {
            setState("partial");
          } else if (state === "partial") {
            setState("checked");
          }
        }}
      />
    </TestProviders>
  );
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {};

export const Disabled = ControlledTemplate.bind({});
Disabled.args = {
  disabled: true,
};
