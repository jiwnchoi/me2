import { Container, Flex } from "@mantine/core";

import { Footer, Navigations, Profile } from "@/components";

export default async function IndexPage(props: PropsWithLocale<never>) {
  const { lang } = await props.params;

  // const dictionary = await getLocale(lang);

  return (
    <Container size={"xl"} p={"xl"}>
      {/* Side Navigation */}
      <Flex w="100%">
        <Flex w={240} direction={"column"} gap={"md"}>
          <Profile locale={lang} />
          <Navigations locale={lang} />
        </Flex>
        {/* Main Content */}
        <Flex flex={1}>{123}</Flex>
      </Flex>
      {/* Footer */}
      <Footer locale={lang} />
    </Container>
  );
}
