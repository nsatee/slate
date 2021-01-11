import styled, { css } from "styled-components";
import { ColorName, getColor, getSpace } from "../theme";

export type ButtonType = "normal" | "ghost" | "clear" | "fade" | "plain";

type Props = {
  active?: boolean;
  color?: ColorName;
  static?: boolean;
  variant?: ButtonType;
  capsule?: boolean;
  size?: "sm" | "md" | "lg";
}

const getVariant = (type: ButtonType) => {
  if (type === "plain") {
    return css<Props>`
      border: 0;
      background: none;

      h1, h2, h3, h4, h5, h6, span, p, small {
        color: ${p => getColor(p, p.color || "brand")};

        &:hover {
          color: ${p => getColor(p, p.color || "brand", ["darken", "0.8"])};
        }
      }
    `
  }
  const hoverState = css<Props>`
      background-color: ${p => {
        switch (type) {
          case "normal": return getColor(p, p.color, ['darken', "0.8"]);
          default: return getColor(p, p.color);
        }
      }};
      border-color: ${p => {
        switch (type) {
          case "normal": return getColor(p, p.color, ['darken', "0.8"]);
          default: return getColor(p, p.color);
        }
      }};

      h1, h2, h3, h4, h5, h6, span, p, small {
        color: ${p =>  getColor(p, p.color, "defaultTheme")} !important;
      }
    `

    return css<Props>`
        background-color: ${p => {
          switch (type) {
            case "fade": return getColor(p, p.color, ["alpha", "0.4"]);
            case "ghost": return getColor(p, p.color, ["alpha", "0"]);
            case "clear": return getColor(p, p.color, ["alpha", "0"]);
            default: return getColor(p, p.color);
          }
        }};
        border: ${p => p.theme.button.border}px solid ${p => {
          switch (type) {
            case "fade": return getColor(p, p.color, ["alpha", "0"]);
            case "clear": return getColor(p, p.color, ["alpha", "0"]);
            default: return getColor(p, p.color);
          }
    }};
        h1, h2, h3, h4, h5, h6, span, p, small {
        color: ${p => {
          switch (type) {
            case "normal": return getColor(p, p.color, "defaultTheme");
            default: return getColor(p, p.color);
          }
    }} !important;
        }
        ${p => p.active && hoverState}
        &:hover {
          ${hoverState}
        }
      `
}

export const Button = styled.button<Props>`
  ${p => getVariant(p.variant || p.theme.button.default)}
  padding: ${p => {
    if (p.variant === "plain") {
      return 0;
    }
    switch (p.size) {
      case "sm": return `${getSpace(p, "xs")} ${getSpace(p, "sm")}`;
      case "lg": return `${getSpace(p, "md")} ${getSpace(p, "lg")}`;
      default: return `${getSpace(p, "sm")} ${getSpace(p, "md")}`;
    }
  }};
  border-radius: ${({ theme, capsule }) => capsule ? "9999px" : `${theme.button.corner}px`};
  cursor: pointer;
  outline: none;
  
  ${props => !props.static && css<Props>`
      &:disabled {
      opacity: 0.6;
    }
  `}
  
`;
