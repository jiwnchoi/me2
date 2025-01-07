"use client";

import { Box } from "@mantine/core";

interface ContentProps {
  locale: Locale;
  content: CVContent;
}

export default function Content(props: ContentProps) {
  const { locale, content } = props;
  const Content = content[locale] ?? content.en;
  return (
    <Box w="full" p={0} ref={content.contentRef}>
      <Content />
    </Box>
  );
}
