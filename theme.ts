import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Container: {
      defaultProps: {
        display: "flex",
      },
    },
  },
});
