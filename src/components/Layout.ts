import styled from "styled-components";
import { getSpace, Spaces } from "../theme";
import { Flex } from "./Flex";

type GridRow = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type GridSizeRow = {
  xs?: GridRow;
  sm?: GridRow;
  md?: GridRow;
  lg?: GridRow;
  xl?: GridRow;
  default?: GridRow;
  span?: {
    xs?: GridRow;
    sm?: GridRow;
    md?: GridRow;
    lg?: GridRow;
    xl?: GridRow;
    default?: GridRow;
  }
}

const parseSize = (value?: GridRow) => {
  return value && (parseInt(value) / 12 * 100).toString() + "%";
}

export const Row = styled.div<GridSizeRow>`
  @media (min-width: 376px) {
    width: ${props => parseSize(props.default)};
    margin-right: ${props => parseSize(props.span?.xs)};
  }

  @media (max-width: 376px) {
    width: ${props => parseSize(props.xs)};
    margin-right: ${props => parseSize(props.span?.default)};
  }

  @media (max-width: 415px) {
    width: ${props => parseSize(props.sm)};
    margin-right: ${props => parseSize(props.span?.sm)};
  }

  @media (max-width: 768px) {
    width: ${props => parseSize(props.md)};
    margin-right: ${props => parseSize(props.span?.md)};
  }

  @media (max-width: 1200px) {
    width: ${props => parseSize(props.lg)};
    margin-right: ${props => parseSize(props.span?.lg)};
  }

  @media (min-width: 1400px) {
    width: ${props => parseSize(props.xl)};
    margin-right: ${props => parseSize(props.span?.xl)};
  }

`;


type ColProps = {
  gap?: Spaces;
};

export const Col = styled(Flex)<ColProps>`
  width: 100%;
  justify-content: start;
  ${Row} {
    margin-right: ${props => getSpace(props, props.gap)};

    &:last-child {
      margin-right: 0;
    }
  }
`;