import styled, { css } from "styled-components";
import Box from "./Box";

export enum JustifyValue {
  end = "flex-end",
  start = "flex-start",
  center = "center",
  between = "space-between",
  around = "space-around"
}

export type JustifyName = "end" | "start" | "center" | "between" | "around"

export type CommonLayoutType = {
  justify?: JustifyName;
  align?: JustifyName;
  alignSelf?: JustifyName;
  justifySelf?: JustifyName;
}

type Props = CommonLayoutType & {
  flex?: number;
  wrapped?: boolean;
}

export const CommonLayoutRule = css<CommonLayoutType>`
  justify-content: ${props => props.justify &&JustifyValue[props.justify]};
  align-items: ${props => props.align &&  JustifyValue[props.align]};
  justify-self: ${props => props.justifySelf && JustifyValue[props.justifySelf]};
  align-self: ${props => props.alignSelf &&JustifyValue[props.alignSelf]};
`;

export const Flex = styled(Box)<Props>`
  display: flex;
  flex: number;
  flex-wrap: ${props => props.wrapped && "wrap"};
  ${CommonLayoutRule}
`;