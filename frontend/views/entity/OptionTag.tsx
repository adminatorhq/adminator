import { lighten } from "polished";
import styled from "styled-components";
import { IColorableSelection } from "./Configure/Fields/types";
import { Text } from "@gothicgeeks/design-system";

const DEFAULT_TAG_COLOR = "#000000";

export const OptionTag = (props: IColorableSelection) => (
  <Root color={props.color}>
    <Text size="5"> {props.label} </Text>
  </Root>
);

const Root = styled.div<{ color: string }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.color || DEFAULT_TAG_COLOR};
  background: ${(props) => lighten(0.45, props.color || DEFAULT_TAG_COLOR)};
`;