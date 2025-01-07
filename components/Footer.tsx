"use client";

import { subText } from "@/styles/defined.css";
import { Button, Center, Flex, Select, Text, useMantineColorScheme } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function Footer({ locale }: { locale: Locale }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { push } = useRouter();

  return (
    <Flex component={Center} direction="column" gap="xs" w="100%" p={"xl"}>
      <Flex gap={"md"}>
        <Select
          style={{ textColor: "gray" }}
          size="sm"
          w={100}
          variant="transparent"
          value={locale}
          onChange={(value) => {
            if (value) push(`/${value}`);
          }}
          data={[
            { value: "en", label: "English" },
            { value: "ko", label: "한국어" },
          ]}
        />
        <Button
          variant="transparent"
          size="sm"
          onClick={() => toggleColorScheme()}
          leftSection={colorScheme === "light" ? <FaSun /> : <FaMoon />}>
          {colorScheme === "light" ? "Light" : "Dark"}
        </Button>
      </Flex>
      <Text className={subText}>Copyright © 2025 Jiwon Jason Choi. All Rights Reserved.</Text>
    </Flex>
  );
}
