import { DefaultTheme, ThemeProps } from "styled-components";
import { Spaces } from "..";

export const getSpace = (
  props: ThemeProps<DefaultTheme>,
  size?: Spaces | "none",
  asNumber?: boolean
) => {
  const value = size && size !== "none" ? props.theme.spaces[size] : 0;
  return asNumber ? value : value + "px";
};
