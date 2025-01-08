import { Container, Flex } from "@mantine/core";

import { Content, Footer, Navigations, Profile } from "@/components";
import { SectionStyle } from "@/styles/defined.css";

export default async function IndexPage(props: PropsWithLocale<never>) {
  const { lang } = await props.params;

  return (
    <Container size={"xl"} p={"xl"}>
      {/* Side Navigation */}
      <Flex w="100%" gap={"xl"}>
        <Flex w={240} direction={"column"} gap={"md"}>
          <Profile locale={lang} />
          <Navigations locale={lang} />
        </Flex>
        {/* Main Content */}
        <Flex className={SectionStyle} align={"flex-start"} p={"lg"} gap={"lg"}>
          {contents.map(({ key, content }) => (
            <Content key={`content-${key}`} content={content} locale={lang} />
          ))}
        </Flex>
      </Flex>
      {/* Footer */}
      <Footer locale={lang} />
    </Container>
  );
}

const contents = [
  {
    key: "about",
    content: await import("@/contents/sections/about").then((mod) => mod.default),
  },
  {
    key: "news",
    content: await import("@/contents/sections/news").then((mod) => mod.default),
  },
  {
    key: "prj",
    content: await import("@/contents/sections/prj").then((mod) => mod.default),
  },
  {
    key: "edu",
    content: await import("@/contents/sections/edu").then((mod) => mod.default),
  },
  {
    key: "exp",
    content: await import("@/contents/sections/exp").then((mod) => mod.default),
  },
  {
    key: "pub",
    content: await import("@/contents/sections/pub").then((mod) => mod.default),
  },
  {
    key: "hnr",
    content: await import("@/contents/sections/hnr").then((mod) => mod.default),
  },
];
