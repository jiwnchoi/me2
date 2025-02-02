"use client";

import { i18n } from "@/i18n-config";
import { textFooter } from "@/styles/defined.css";
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
          data={i18n.locales.map((locale) => ({ value: locale, label: i18n.localeNames[locale] }))}
        />
        <Button
          variant="transparent"
          size="sm"
          onClick={() => toggleColorScheme()}
          leftSection={colorScheme === "light" ? <FaSun /> : <FaMoon />}>
          {colorScheme === "light" ? "Light" : "Dark"}
        </Button>
      </Flex>
      <Text className={textFooter}>Copyright © 2025 Jiwon Jason Choi. All Rights Reserved.</Text>
    </Flex>
  );
}
