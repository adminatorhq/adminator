import {
  AsyncFormSelect,
  FormCodeEditor,
  FormDateInput,
  FormFileInput,
  FormInput,
  FormNumberInput,
  FormSelect,
  FormSwitch,
  FormSelectButton,
  FormTextArea,
} from "@hadmean/chromista";
import { ISharedFormInput } from "@hadmean/chromista/dist/components/Form/_types";
import { StringUtils } from "@hadmean/protozoa";
import { IColorableSelection } from "shared/types/ui";
import { FIELD_TYPES_CONFIG_MAP } from "shared/validations";

interface IProps {
  type: keyof typeof FIELD_TYPES_CONFIG_MAP;
  renderProps: ISharedFormInput;
  selectionUrl?: string;
  entityFieldSelections?: IColorableSelection[];
  required: boolean;
  disabled: boolean;
  label: string;
}

export function RenderFormInput({
  renderProps,
  label,
  type,
  entityFieldSelections = [],
  selectionUrl,
  required,
  disabled,
}: IProps) {
  const formProps = {
    label,
    required,
    disabled,
    ...renderProps,
  };

  if (entityFieldSelections.length > 0) {
    if (entityFieldSelections.length > 1 && entityFieldSelections.length <= 4) {
      return (
        <FormSelectButton {...formProps} selectData={entityFieldSelections} />
      );
    }
    return <FormSelect {...formProps} selectData={entityFieldSelections} />;
  }

  if (selectionUrl) {
    return <AsyncFormSelect {...formProps} url={selectionUrl} />;
  }

  switch (type) {
    case "email":
    case "password":
    case "url":
    case "color":
      return <FormInput type={type} {...formProps} />;
    case "number":
      return <FormNumberInput {...formProps} />;

    case "datetime-local":
      return <FormDateInput {...formProps} />;

    case "selection":
    case "selection-enum":
      return <FormSelect {...formProps} selectData={entityFieldSelections} />;

    case "reference":
      return <AsyncFormSelect {...formProps} url={selectionUrl} />;

    case "boolean":
      return (
        <FormSwitch
          name={StringUtils.sluggify(label)}
          value={formProps.input.value}
          onChange={formProps.input.onChange}
          {...formProps}
        />
      );

    case "json":
      return <FormCodeEditor {...formProps} />;

    case "textarea":
      return <FormTextArea {...formProps} />;

    case "richtext":
      return <FormTextArea {...formProps} />;

    case "image":
    case "file":
      return <FormFileInput {...formProps} uploadUrl="/api/upload" />;

    default:
      return <FormInput {...formProps} />;
  }
}
