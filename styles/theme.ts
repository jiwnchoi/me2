"use client";

import { createTheme, DEFAULT_THEME, mergeThemeOverrides } from "@mantine/core";

export const theme = mergeThemeOverrides(
  DEFAULT_THEME,
  createTheme({
    autoContrast: true,
    primaryColor: "orange",
    defaultRadius: "sm",
  }),
);
