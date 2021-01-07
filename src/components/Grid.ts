import styled from "styled-components";
import { getSpaces, Spaces } from "../theme/theme";

type Props = {
  col: Spaces
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => getSpaces(props, props.col)};
`;