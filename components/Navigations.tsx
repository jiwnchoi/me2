import { SectionStyle } from "@/styles/defined.css";
import { getLocale } from "@/utils";
import { Button, Flex } from "@mantine/core";

export default async function Navigations({ locale }: { locale: Locale }) {
  const t = await getLocale(locale);

  return (
    <Flex className={SectionStyle}>
      <Button w="100%" variant="solid" justify="start" ps={"xs"}>
        {t["nav.about"]}
      </Button>
      <Button w="100%" variant="subtle" justify="start" ps={"xs"}>
        {t["nav.proj"]}
      </Button>
      <Button w="100%" variant="subtle" justify="start" ps={"xs"}>
        {t["nav.exp"]}
      </Button>
      <Button w="100%" variant="subtle" justify="start" ps={"xs"}>
        {t["nav.pub"]}
      </Button>
      <Button w="100%" variant="subtle" justify="start" ps={"xs"}>
        {t["nav.hnr"]}
      </Button>
    </Flex>
  );
}
