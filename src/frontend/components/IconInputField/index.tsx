import { Field } from "react-final-form";
import { SystemIconsKeys, SystemIconsList } from "shared/constants/Icons";
import { required } from "frontend/lib/validations";
import { userFriendlyCase } from "shared/lib/strings/friendly-case";
import { FormSelect } from "frontend/design-system/components/Form/FormSelect";
import { FormTextArea } from "frontend/design-system/components/Form/FormTextArea";
import { msg } from "@lingui/macro";

export function IconInputField({ value }: { value: string }) {
  return (
    <Field name="icon" validateFields={[]} validate={required}>
      {({ input, meta }) =>
        SystemIconsList.includes(value as SystemIconsKeys) ? (
          <FormSelect
            label={msg`Icon`}
            required
            selectData={SystemIconsList.map((icon) => ({
              value: icon,
              label: msg`${userFriendlyCase(icon)}`,
            }))}
            meta={meta}
            input={input}
            rightActions={[
              {
                systemIcon: "ToggleLeft",
                label: msg`Use SVG`,
                action: () => input.onChange(""),
              },
            ]}
          />
        ) : (
          <FormTextArea
            rows={10}
            description="Pass in valid SVG in here with the prop `fill='currentColor'`"
            label={msg`SVG`}
            required
            meta={meta}
            input={input}
            rightActions={[
              {
                systemIcon: "ToggleRight",
                label: msg`Use Icon`,
                action: () => input.onChange(SystemIconsList[0]),
              },
            ]}
          />
        )
      }
    </Field>
  );
}
