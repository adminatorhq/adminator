import { MAKE_CRUD_CONFIG } from "frontend/lib/crud-config";
import { IAppliedSchemaFormConfig } from "shared/form-schemas/types";
import { t } from "@lingui/macro";
import { IUserPreferences } from "./types";

export const ACCOUNT_PREFERENCES_CRUD_CONFIG = MAKE_CRUD_CONFIG({
  path: "N/A",
  plural: "Account Preferences",
  singular: t`Account Preferences`,
});

export const UPDATE_USER_PREFERENCES_FORM_SCHEMA: IAppliedSchemaFormConfig<IUserPreferences> =
  {
    theme: {
      type: "selection",
      validations: [
        {
          validationType: "required",
        },
      ],
      selections: [
        {
          label: t`Light`,
          value: "light",
        },
        {
          label: t`Dark`,
          value: "dark",
        },
      ],
    },
  };
