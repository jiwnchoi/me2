import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Jiwon Choi 최지원",
  description: "Software Engineer & Visualization Researcher Jiwon Choi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
        <GoogleAnalytics gaId="G-XVX4B96FPG" />
      </body>
    </html>
  );
}