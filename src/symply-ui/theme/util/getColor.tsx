import { DefaultTheme, ThemeProps } from "styled-components";
import tinycolor from "tinycolor2";
import defaultTheme, { ColorName } from "..";
type ColorType = "darken" | "brighten" | "alpha" | "lighten";
type ColorValue =
  | "0"
  | "0.1"
  | "0.2"
  | "0.3"
  | "0.4"
  | "0.5"
  | "0.6"
  | "0.7"
  | "0.8"
  | "0.9";

export const getColor = (
  props: ThemeProps<DefaultTheme>,
  color: ColorName = "brand",
  colorCommand?: [ColorType, ColorValue] | boolean | "defaultTheme"
) => {
  if (colorCommand) {
    const command = Array.isArray(colorCommand) && colorCommand![0];
    const colorObj = tinycolor(props.theme.colors[color]);
    const based = (based: number) =>
      Array.isArray(colorCommand) ? parseFloat(colorCommand[1]) * based : 0;

    switch (command) {
      case "alpha":
        return (
          Array.isArray(colorCommand) &&
          colorObj.setAlpha(parseFloat(colorCommand[1])).toRgbString()
        );
      case "darken":
        return (
          Array.isArray(colorCommand) &&
          colorObj.darken(based(10)).toRgbString()
        );
      case "brighten":
        return (
          Array.isArray(colorCommand) &&
          colorObj.brighten(based(10)).toRgbString()
        );
      case "lighten":
        return (
          Array.isArray(colorCommand) && colorObj.lighten(based(100)).toString()
        );
      default:
        return typeof colorCommand === "string"
          ? defaultTheme.colors.background
          : colorCommand && colorObj.isLight()
          ? props.theme.colors.text
          : props.theme.colors.background;
    }
  } else {
    return props.theme.colors[color];
  }
};
