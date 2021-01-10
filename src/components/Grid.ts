import styled from "styled-components";
import { getSpace, Spaces } from "../theme";
import { CommonLayoutRule, CommonLayoutType } from "./Flex";

type Props = CommonLayoutType & {
  flow?: "column" | "row",
  col?: string;
  gap?: Spaces,
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-auto-flow: ${props => props.flow};
  grid-template-columns: ${props => props.col && `repeat(${props.col}, 1fr)`};
  grid-gap: ${props => getSpace(props, props.gap)};
  ${CommonLayoutRule}
`;