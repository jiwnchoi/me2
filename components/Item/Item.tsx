import { Anchor, Box, Flex, Highlight, Image, Text } from "@mantine/core";
import NextImage from "next/image";

interface ItemProps {
  date?: string;
  location?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
}

export default function Item({
  date,
  location,
  title,
  subtitle,
  description,
  href,
  image,
}: ItemProps) {
  return (
    <Flex mb={8} justify={"space-between"} w={"100%"}>
      {image && (
        <Flex>
          <Image
            p={4}
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
            }}
            mr={16}
            component={NextImage}
            src={image}
            alt={`logo-${title}`}
            layout={"fit"}
          />
        </Flex>
      )}
      <Flex direction="column">
        <Anchor href={href}>
          <Text component="span">{title}</Text>
          {location && <Text component="span">, {location}</Text>}
        </Anchor>
        {subtitle && <Text>{subtitle}</Text>}
        {description && <Text>{description}</Text>}
      </Flex>
      <Box flex={1} />
      {date && (
        <Highlight
          w={{ base: "100%", md: "100px" }}
          highlight={["Present", "현재"].filter((h) => date.includes(h))}>
          {date}
        </Highlight>
      )}
    </Flex>
  );
}
