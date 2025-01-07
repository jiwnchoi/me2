import { Container, Flex } from "@mantine/core";

import { Profile } from "@/components";
import { getLocale } from "@/utils";

export default async function IndexPage(props: PropsWithLocale<never>) {
  const { lang } = await props.params;

  const dictionary = await getLocale(lang);

  return (
    <Container size={"xl"} p={"sm"}>
      {/* Side Navigation */}
      <Flex w={240}>
        <Profile locale={lang} />
      </Flex>
      {/* Main Content */}
      <Flex flex={1}>{dictionary.welcome}</Flex>
    </Container>
  );
}
