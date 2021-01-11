import React, { createContext, FC, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
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

const shadows = {
  lv1:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  lv2:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  lv3:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
};

export const defaultTheme = {
  colors: lightColor,
  spaces,
  shadows,
  button: {
    default: "normal" as ButtonType,
    border: 2,
    corner: 8,
  },
  card: {
    corner: 12,
  },
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
