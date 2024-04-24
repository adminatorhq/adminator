import { t } from "@lingui/macro";
import { IAppliedSchemaFormConfig } from "../types";

export type ISignInForm = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const AUTH_SIGNIN_FORM_SCHEMA: IAppliedSchemaFormConfig<ISignInForm> = {
  username: {
    type: "text",
    validations: [
      {
        validationType: "required",
      },
    ],
  },
  password: {
    type: "password",
    validations: [
      {
        validationType: "required",
      },
    ],
  },
  rememberMe: {
    type: "boolean",
    label: t`Remember Me`,
    validations: [],
  },
};
