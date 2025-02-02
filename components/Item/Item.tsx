import { textEm, textSub } from "@/styles/defined.css";
import { Anchor, Box, Flex, Highlight, Image, Text } from "@mantine/core";
import NextImage from "next/image";
import type { FC } from "react";

interface ItemProps {
  date?: string;
  location?: string;
  title?: string;
  subtitle?: string;
  description?: string | FC;
  image?: string;
  href?: string;
  links?: FC;
}

export default function Item({
  date,
  location,
  title,
  subtitle,
  description: Description,
  href,
  image,
  links: Links,
}: ItemProps) {
  return (
    <Flex mb={8} justify={"space-between"} w={"100%"} gap={16}>
      <Flex justify={"space-between"} w={"100%"} gap={16}>
        {image && (
          <Flex>
            <Image
              p={4}
              mt={6}
              bg={"white"}
              width={64}
              height={64}
              style={{
                borderRadius: "4px",
                maxWidth: "64px",
                maxHeight: "64px",
                weight: "100%",
                objectFit: "contain",
                height: "auto",
                minHeight: "64px",
                minWidth: "64px",
              }}
              component={NextImage}
              src={image}
              alt={`logo-${title}`}
              layout={"fit"}
            />
          </Flex>
        )}
        <Flex direction="column">
          <Text component="p">
            {href ? (
              <Anchor href={href} className={textEm} p={0}>
                {title}
              </Anchor>
            ) : (
              <Text component="span" className={textEm}>
                {title}
              </Text>
            )}
            {location && <Text component="span" className={textSub}>{`, ${location}`}</Text>}
          </Text>
          {subtitle && (
            <Text component="p" fs="italic">
              {subtitle}
            </Text>
          )}

          {typeof Description === "function" ? (
            <Description />
          ) : (
            <Text component="p" className={textSub}>
              {Description}
            </Text>
          )}
        </Flex>
        <Box flex={1} />
        {date && (
          <Highlight
            w={100}
            miw={100}
            highlight={["Present", "현재"].filter((h) => date.includes(h))}>
            {date}
          </Highlight>
        )}
      </Flex>
      {Links && <Links />}
    </Flex>
  );
}
