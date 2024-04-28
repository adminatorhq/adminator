import { IFormProps } from "frontend/lib/form/types";
import { SchemaForm } from "frontend/components/SchemaForm";
import { IAppliedSchemaFormConfig } from "shared/form-schemas/types";
import { IntegrationsConfigurationGroup } from "shared/types/integrations";
import { IKeyValue } from "shared/types/options";
import { msg } from "@lingui/macro";
import { INTEGRATIONS_GROUP_CRUD_CONFIG } from "./constants";

export const CAPITAL_AND_UNDERSCORE_REGEX = `^[A-Z_]+$`;

export const FORM_SCHEMA: IAppliedSchemaFormConfig<IKeyValue> = {
  key: {
    label: msg`Key`,
    type: "text",
    validations: [
      {
        validationType: "required",
      },
      {
        validationType: "regex",
        constraint: {
          pattern: CAPITAL_AND_UNDERSCORE_REGEX,
        },
        errorMessage: msg`Only capital letters and underscores are allowed`,
      },
    ],
    formState: ($) => ({
      disabled: $.action === "update",
    }),
  },
  value: {
    label: msg`Value`,
    type: "text",
    validations: [
      {
        validationType: "required",
      },
    ],
  },
};

export function KeyValueForm({
  group,
  onSubmit,
  initialValues,
}: IFormProps<IKeyValue> & { group: IntegrationsConfigurationGroup }) {
  const isCreate = !initialValues;
  return (
    <SchemaForm<IKeyValue>
      onSubmit={onSubmit}
      initialValues={initialValues}
      systemIcon={isCreate ? "Plus" : "Save"}
      buttonText={
        isCreate
          ? INTEGRATIONS_GROUP_CRUD_CONFIG[group].crudConfig.FORM_LANG.CREATE
          : INTEGRATIONS_GROUP_CRUD_CONFIG[group].crudConfig.FORM_LANG.UPDATE
      }
      action={isCreate ? "create" : "update"}
      fields={FORM_SCHEMA}
    />
  );
}
