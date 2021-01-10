import styled, { css } from "styled-components";
import { ColorName, getColor, getSpace } from "../theme";

type Props = {
  active?: boolean;
  color?: ColorName;
  static?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${props => getColor(props, props.color || "brand", props.active ? ["darken", "0.8"] : undefined)};
  padding: ${props => `${getSpace(props, "sm")} ${getSpace(props, "md")}`};
  border: 0;
  border-radius: ${({ theme }) => theme.button.corner}px;
  cursor: pointer;
  outline: none;
  
  ${props => !props.static && css<Props>`
      &:disabled {
      opacity: 0.6;
    }

    &:hover {
      background-color: ${props => getColor(props, props.color || "brand", ["darken", "0.8"])}
    }

    &:focus {
      box-shadow: 0 0 0 2px ${props => getColor(props, props.color || "brand", ["darken", "0.8"])};
    }
  `}
  
`;
