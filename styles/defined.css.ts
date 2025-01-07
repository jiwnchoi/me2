import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const SectionStyle = style({
  borderRadius: vars.radius.md,
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

export const subText = style({
  fontWeight: 400,
  fontSize: vars.fontSizes.xs,

  selectors: {
    [vars.lightSelector]: {
      color: vars.colors.gray[7],
    },

    [vars.darkSelector]: {
      color: vars.colors.gray[3],
    },
  },
});
