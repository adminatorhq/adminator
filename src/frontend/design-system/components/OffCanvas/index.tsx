import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactNode } from "react";
import styled from "styled-components";
import { USE_ROOT_COLOR } from "frontend/design-system/theme/root";
import { Typo } from "frontend/design-system/primitives/Typo";
import { Stack } from "frontend/design-system/primitives/Stack";
import { Divider } from "frontend/design-system/primitives/Divider";
import { Z_INDEXES } from "frontend/design-system/constants/zIndex";
import { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { NextPortal } from "../_/NextPortal";
import { SoftButton } from "../Button/SoftButton";

export interface IProps {
  show: boolean;
  title: MessageDescriptor;
  children: ReactNode;
  onClose: () => void;
  width?: number;
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Body = styled.div`
  flex-grow: 1;
  padding: 1rem;
  padding-top: 0.5rem;
  overflow-y: auto;
`;

const Root = styled.div<{ width: number }>`
  position: fixed;
  bottom: 0;
  z-index: ${Z_INDEXES.offCanvas};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: ${USE_ROOT_COLOR("base-color")};
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;

  top: 0;
  right: 0;
  width: ${(props) => props.width}px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(100%);

  &.show {
    transform: none;
  }
`;

const DEFAULT_CANVAS_WIDTH = 400;

export function OffCanvas({
  show,
  onClose,
  title,
  children,
  width = DEFAULT_CANVAS_WIDTH,
}: IProps) {
  const { _ } = useLingui();

  if (!show) {
    return null;
  }

  return (
    <NextPortal>
      <Root as={Offcanvas} show onHide={onClose} placement="end" width={width}>
        <Header>
          <Stack $justify="space-between" $align="center">
            <Typo.MD $weight="bold">{_(title)}</Typo.MD>
            <SoftButton
              justIcon
              label={msg`Close Canvas`}
              noToolTip
              systemIcon="Close"
              action={onClose}
              color="danger"
              size="sm"
            />
          </Stack>
        </Header>
        <Divider />
        <Body>{children}</Body>
      </Root>
    </NextPortal>
  );
}
