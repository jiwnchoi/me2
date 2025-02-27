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

export const textEm = style({
  fontWeight: 600,
  fontSize: vars.fontSizes.lg,
});

export const textSub = style({
  fontWeight: 500,
  fontSize: vars.fontSizes.sm,
color: vars.colors.gray[6],
});

export const textFooter = style({
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
