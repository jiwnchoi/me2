import { Box, List, Text, Title } from "@mantine/core";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Title mb={8} order={1}>
        {children}
      </Title>
    ),
    h2: ({ children }) => (
      <Title mb={8} order={2}>
        {children}
      </Title>
    ),
    h3: ({ children }) => (
      <Title mb={8} order={3}>
        {children}
      </Title>
    ),
    p: ({ children }) => (
      <Text size="md" lh={1.5}>
        {children}
      </Text>
    ),
    span: ({ children }) => (
      <Text component="span" size="md">
        {children}
      </Text>
    ),
    a: ({ href, children }) => (
      <Link href={href ?? "/"}>
        <Text component="span" td="underline">
          {children}
        </Text>
      </Link>
    ),
    strong: ({ children }) => (
      <Text component="strong" size="md">
        {children}
      </Text>
    ),
    ol: ({ children }) => <List type="ordered">{children}</List>,
    ul: ({ children }) => <List>{children}</List>,
    li: ({ children }) => (
      <List.Item ml={4}>
        <Text size="md">{children}</Text>
      </List.Item>
    ),
    blockquote: ({ children }) => (
      <Box
        component="blockquote"
        p={"md"}
        m={0}
        mb={16}
        style={(theme) => ({
          border: `4px solid ${theme.colors[theme.primaryColor][6]}`,
          borderRadius: theme.radius.md,
        })}>
        {children}
      </Box>
    ),
    ...components,
  };
}
