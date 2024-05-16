import styled, { css } from "styled-components";

import { USE_ROOT_COLOR } from "frontend/design-system/theme/root";
import { ISelectData } from "shared/types/options";
import { useLingui } from "@lingui/react";
import { Input } from "../Styles";

interface ISimpleSelect {
  options: ISelectData[];
  onChange: (value: string) => void;
  value: number | string;
  fullWidth?: boolean;
  sm?: true;
  width: number;
  ariaLabel?: string;
}

const SimpleSelectStyled = styled(Input)<{
  fullWidth?: boolean;
  width: number;
}>`
  display: inline-block;
  width: ${(props) => props.width}px;
  vertical-align: middle;
  background: ${USE_ROOT_COLOR("base-color")}
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%232c3652' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
    no-repeat right 0.75rem center/8px 10px;
  appearance: none;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export function SimpleSelect({
  options,
  onChange,
  value,
  fullWidth,
  sm,
  width,
  ariaLabel,
}: ISimpleSelect) {
  const { _ } = useLingui();

  return (
    <SimpleSelectStyled
      as="select"
      aria-label={ariaLabel}
      value={value}
      sm={sm}
      width={width}
      fullWidth={fullWidth}
      onChange={(e: { target: { value: string } }) => {
        onChange(e.target.value);
      }}
    >
      {options.map(({ value: value$1, label }) => (
        <option key={`${value$1}`} value={`${value$1}`}>
          {_(label)}
        </option>
      ))}
    </SimpleSelectStyled>
  );
}
