import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const SectionStyle = style({
  borderRadius: vars.radius.sm,
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  width: "100%",
  padding: vars.spacing.md,

  borderWidth: 1,
  borderStyle: "solid",

  selectors: {
    [vars.lightSelector]: {
      borderColor: vars.colors.gray[2],
    },

    [vars.darkSelector]: {
      borderColor: vars.colors.gray[8],
    },
  },
});

export const emText = style({
  fontWeight: 700,
  fontSize: vars.fontSizes.xl,
});
