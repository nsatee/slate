import { DefaultTheme, ThemeProps } from "styled-components";
import tiny from 'tinycolor2';

export type ThemeType = typeof light;
export type ColorName = keyof typeof lightColor;
export type Spaces = keyof typeof spaces;

const lightColor = {
    brand: "#6A94E1",
    based: "#DBDFE8",
    secondary: "#854BA8",
    text: "#35344A",
    background: "#F3F6FA",
    success: "#73D68E",
    error: "#DF4F61",
    warning: "#F5B948"
}

const spaces = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
}


export const light = {
  colors: lightColor,
  spaces,
  space: [4, 8, 12, 16, 24, 32, 48, 72, 96, 120],
  button: {
    corner: 8,
  },
  card: {
    corner: 12,
  }
}
export const dark: ThemeType = {
  ...light
}

type ColorType = "darken" | "brighten" | "alpha" | "lighten";
type ColorValue = "0" | "0.1" | "0.2" | "0.3" | "0.4" | "0.5" | "0.6" | "0.7" | "0.8" | "0.9";
type SpaceIndex = "0" |"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

export const getSpace = (props: ThemeProps<DefaultTheme>, index: SpaceIndex, asPx?: boolean) => {
  const value = props.theme.space[parseInt(index)]
  return asPx ? `${value}px` : value
}

export const getSpaces = (props: ThemeProps<DefaultTheme>, size: keyof typeof spaces, asNumber?: boolean) => {
  const value = props.theme.spaces[size];
  return asNumber ? value : value + "px";
}

export const getColor = (props: ThemeProps<DefaultTheme>, color: keyof typeof theme.colors, colorCommand?: [ColorType, ColorValue]) => {
  const setValue = (colorVal: tiny.Instance) => {
    if (colorCommand) {
      const command = colorCommand![0]
      const colorObj = tiny(props.theme.colors[color])
      const basedTen = parseFloat(colorCommand[1]) * 10;

      if (command === "alpha") {
        return colorObj.setAlpha(parseFloat(colorCommand[1])).toRgbString()
      }
      if (command === "darken") {
        return colorObj.darken(basedTen).toRgbString()
      }
      if (command === "brighten") {
        return colorObj.brighten(basedTen).toRgbString()
      }
      if (command === "lighten") {
        return colorObj.lighten(basedTen).toRgbString()
      }
    } else {
      return props.theme.colors[color];
    }
  }
  return setValue(tiny(props.theme.colors[color]));
}

const theme = light;
export default theme;