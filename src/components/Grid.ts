import styled from "styled-components";
import { getSpace, Spaces } from "../theme";
import Box from "./Box";
import { CommonLayoutRule, CommonLayoutType } from "./Flex";

type Props = CommonLayoutType & {
  flow?: "column" | "row",
  col?: string;
  screen?: {
    col?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    },
    gap?: {
      xs?: Spaces;
      sm?: Spaces;
      md?: Spaces;
      lg?: Spaces;
      xl?: Spaces;
    }
  }
  gap?: Spaces,
}

export const Grid = styled(Box)<Props>`
  display: grid;
  grid-auto-flow: ${props => props.flow};
  grid-template-columns: ${props => props.col && `repeat(${props.col}, 1fr)`};
  grid-gap: ${props => getSpace(props, props.gap)};
  ${CommonLayoutRule}

  @media (max-width: 376px) {
    grid-template-columns: ${props => props.screen?.col?.xs && `repeat(${props.screen?.col?.xs}, 1fr)`};
    grid-gap: ${props => props.screen?.gap?.xs && getSpace(props, props.screen?.gap?.xs)};
  }

  @media (max-width: 415px) {
    grid-template-columns: ${props => props.screen?.col?.sm && `repeat(${props.screen?.col?.sm}, 1fr)`};
    grid-gap: ${props => props.screen?.gap?.sm && getSpace(props, props.screen?.gap?.sm)};
  }

  @media (max-width: 768px) {
    grid-template-columns: ${props => props.screen?.col?.md && `repeat(${props.screen?.col?.md}, 1fr)`};
    grid-gap: ${props => props.screen?.gap?.md && getSpace(props, props.screen?.gap?.md)};
  }

  @media (max-width: 1200px) {
    grid-template-columns: ${props => props.screen?.col?.lg && `repeat(${props.screen?.col?.lg}, 1fr)`};
    grid-gap: ${props => props.screen?.gap?.lg && getSpace(props, props.screen?.gap?.lg)};
  }
`;