import { Profile } from "@/components";

import { getLocale } from "@/utils";

import { Container, Flex } from "@mantine/core";

export default async function IndexPage(props: PropsWithLocale<object>) {
  const { lang } = await props.params;

  const dictionary = await getLocale(lang);

  return (
    <Container size={"xl"} p={"sm"}>
      {/* Side Navigation */}
      <Flex w={300}>
        <Profile />
      </Flex>
      {/* Main Content */}
      <Flex flex={1}>{dictionary.welcome}</Flex>
    </Container>
  );
}
