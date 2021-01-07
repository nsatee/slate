import styled from "styled-components";
import { Flex } from "./Flex";

type GridRow = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type GridSizeRow = {
  xs?: GridRow;
  sm?: GridRow;
  md?: GridRow;
  lg?: GridRow;
  xl?: GridRow;
}

type RowProps = {
  col: GridSizeRow;
}



export const Col = styled(Flex)`
  width: 100%;
  justify-content: start;
  flex-wrap: wrap;
`;

const parseSize = (value?: GridRow) => {
  return value && (100 / parseInt(value) * 10).toString() + "%";
}

export const Row = styled.div<RowProps>`
  @media (max-width: 376px) {
    width: ${props => parseSize(props.col.xs)};
  }

  @media (max-width: 415px) {
    width: ${props => parseSize(props.col.sm)};
  }

  @media (max-width: 768px) {
    width: ${props => parseSize(props.col.md)};
  }

  @media (max-width: 1200px) {
    width: ${props => parseSize(props.col.lg)};
  }

  @media (max-width: 1400px) {
    width: ${props => parseSize(props.col.xl)};
  }

`;