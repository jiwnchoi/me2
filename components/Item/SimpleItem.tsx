import { Box, Flex } from "@mantine/core";

interface SimpleItemProps {
  date?: string;
  content?: string;
}

export default function SimpleItem(props: SimpleItemProps) {
  return (
    <Flex component="p" my={2}>
      {props.date && (
        <Box component="span" style={{ fontWeight: 600 }} miw={100}>
          {props.date}
        </Box>
      )}
      {props.content && <Box component="span">{props.content}</Box>}
    </Flex>
  );
}
