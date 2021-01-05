import styled from "styled-components";
import { getColor, getSpace } from "../theme/theme";

type Props = {
  active?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${props => getColor(props, "brand", props.active ? ["darken", "0.8"] : undefined)};
  padding: ${props => `${getSpace(props, "2", true)} ${getSpace(props, "3", true)}`};
  border: 0;
  border-radius: ${({ theme }) => theme.button.corner}px;
  cursor: pointer;

  &:hover {
    background-color: ${props => getColor(props, "brand", ["darken", "0.8"])}
  }
`;
