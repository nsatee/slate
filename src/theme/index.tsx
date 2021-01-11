import React, { createContext, FC, useContext, useMemo, useState } from "react";
import { DefaultTheme, ThemeProps, ThemeProvider } from "styled-components";
import tiny from "tinycolor2";
import { ButtonType } from "../components/Button";
import { Reset } from "../components/Reset";

export type ThemeType = typeof defaultTheme;
export type ColorName = keyof typeof lightColor;
export type Spaces = keyof typeof spaces | "none";
export type ThemeSet = { [key: string]: ThemeType };
type StoreType = React.Context<{
  active: string;
  theme: { [key: string]: ThemeType };
  activeTheme: ThemeType;
  change: (color: string) => void;
  toggle: (val: [string, string]) => void;
  register: (theme: { [key: string]: ThemeType }) => void;
}>;

const lightColor = {
  brand: "#6A94E1",
  based: "#DBDFE8",
  secondary: "#854BA8",
  text: "#35344A",
  background: "#F3F6FA",
  success: "#73D68E",
  error: "#DF4F61",
  warning: "#F5B948",
};

const darkColor = {
  brand: "#6A94E1",
  based: "#1B1E2C",
  secondary: "#854BA8",
  background: "#35344A",
  text: "#F3F6FA",
  success: "#73D68E",
  error: "#DF4F61",
  warning: "#F5B948",
};

const spaces = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const defaultTheme = {
  colors: lightColor,
  spaces,
  button: {
    default: "normal" as ButtonType,
    border: 2,
    corner: 8,
  },
  card: {
    corner: 12,
  },
};

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

export const getSpace = (
  props: ThemeProps<DefaultTheme>,
  size?: keyof typeof spaces | "none",
  asNumber?: boolean
) => {
  const value = size && size !== "none" ? props.theme.spaces[size] : 0;
  return asNumber ? value : value + "px";
};

export const getColor = (
  props: ThemeProps<DefaultTheme>,
  color: ColorName = "brand",
  colorCommand?: [ColorType, ColorValue] | boolean | "defaultTheme"
) => {
  if (colorCommand) {
    const command = Array.isArray(colorCommand) && colorCommand![0];
    const colorObj = tiny(props.theme.colors[color]);
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

export const initTheme = (
  initValue: { [key: string]: ThemeType } = { defaultTheme }
) => {
  return createContext({
    active: "light",
    theme: initValue,
    activeTheme: initValue.light,
    change: (color: string) => {},
    toggle: (val: [string, string]) => {},
    register: (theme: { [key: string]: ThemeType }) => {},
  });
};

export const themeAction = (store: StoreType) => {
  return () => useContext(store);
};

const themeStore = initTheme();
export const useTheme = themeAction(themeStore);

export const Theme: FC<{
  theme?: { [key: string]: ThemeType };
  active?: string;
}> = ({ children, theme, active }) => {
  const allTheme = {
    light: defaultTheme,
    dark: { ...defaultTheme, colors: { ...defaultTheme, ...darkColor } },
    ...theme,
  };
  const MainProvider = themeStore.Provider;
  const MainConsumer = themeStore.Consumer;
  const [themeState, setThemeState] = useState({
    theme: allTheme,
    active: "light",
    activeTheme: active
      ? allTheme[active as keyof typeof allTheme]
      : allTheme.light,
  });

  const change = (color: string) =>
    setThemeState((prev) => ({ ...prev, active: color }));

  const toggle = (val: [string, string]) =>
    setThemeState((prev) => ({
      ...prev,
      active: themeState.active === val[0] ? val[1] : val[0],
    }));

  const register = (theme: { [key: string]: ThemeType }) =>
    setThemeState((prev) => ({ ...prev, theme: { ...prev.theme, ...theme } }));

  const value = useMemo(() => themeState, [themeState]);

  return (
    <MainProvider value={{ ...value, change, register, toggle }}>
      <MainConsumer>
        {({ theme }) => (
          <ThemeProvider theme={theme[themeState.active]}>
            <Reset />
            {children}
          </ThemeProvider>
        )}
      </MainConsumer>
    </MainProvider>
  );
};

export default defaultTheme;
