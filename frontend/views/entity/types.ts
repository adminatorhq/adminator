import { IColorableSelection } from "shared/types";
import { FIELD_TYPES_CONFIG_MAP } from "shared/validations";
import { IFieldValidationItem } from "shared/validations/types";

export interface IBaseEntityForm {
  fields: string[];
  entityFieldSelections: Record<string, IColorableSelection[]>;
  getEntityFieldLabels: (name: string) => string;
  onSubmit: (data: Record<string, unknown>) => void;
  entityFieldTypes: Record<string, keyof typeof FIELD_TYPES_CONFIG_MAP>;
}

export interface IEntityFormSettings {
  entityValidationsMap: Record<string, IFieldValidationItem[]>;
}