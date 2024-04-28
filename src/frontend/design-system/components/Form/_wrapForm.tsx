import classnames from "classnames";
import { FieldMetaState } from "react-final-form";
import { Stack } from "frontend/design-system/primitives/Stack";
import { SystemIcon } from "frontend/design-system/Icons/System";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { i18n } from "@lingui/core";
import { ISharedFormInput } from "./_types";
import { Tooltip } from "../Tooltip";
import { FormLabel, FormFeedback, RequiredAsterick } from "./Styles";
import { SoftButton } from "../Button/SoftButton";

export const isFormMetaWithError = (meta: FieldMetaState<any>) =>
  meta && meta.touched && meta.invalid && meta.error;

export const wrapLabelAndError = (
  formComponent: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  {
    meta,
    label,
    input,
    required,
    description,
    sm,
    rightActions = [],
  }: ISharedFormInput
) => (
  <>
    <Stack $justify="space-between" $align="baseline">
      <div>
        {label && (
          <>
            <FormLabel sm={sm} htmlFor={input.name}>
              {i18n._(label)}
            </FormLabel>
            {required ? <RequiredAsterick> *</RequiredAsterick> : null}
          </>
        )}
        {description ? (
          <Tooltip text={description} place="right">
            <SystemIcon icon="Help" size={15} />
          </Tooltip>
        ) : null}
      </div>
      {rightActions.length > 0 && (
        <Stack $flex={1} $justify="end">
          {rightActions.map((rightAction) => (
            <SoftButton
              key={rightAction.label.message}
              action={rightAction.action}
              size="xs"
              systemIcon={rightAction.systemIcon}
              label={rightAction.label}
            />
          ))}
        </Stack>
      )}
    </Stack>
    {formComponent}
    <FormFeedback
      role={isFormMetaWithError(meta) ? "alert" : undefined}
      sm={sm}
    >
      {isFormMetaWithError(meta)}
      &nbsp;
    </FormFeedback>
  </>
);

export const generateClassNames = (meta: FieldMetaState<any>): string =>
  classnames({
    invalid: !!isFormMetaWithError(meta),
  });

export const generateFormArias = (
  meta?: FieldMetaState<any>
): Record<string, string> => {
  if (!meta) {
    return {};
  }
  if (isFormMetaWithError(meta)) {
    return { "aria-invalid": "true" };
  }
  return {};
};
