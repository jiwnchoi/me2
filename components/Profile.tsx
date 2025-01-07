import profileImage from "@/contents/profile/profilepic.png";
import { emText, SectionStyle } from "@/styles/defined.css";

import { getLocaleContent } from "@/utils";
import { ActionIcon, ActionIconGroup, Box, Flex, Image, Text } from "@mantine/core";
import { Github01Icon, MailAtSign01Icon } from "hugeicons-react";
import NextImage from "next/image";

interface ProfileProps {
  locale: Locale;
}

export default async function Profile({ locale }: ProfileProps) {
  const profile = await getLocaleContent(locale, "contents/profile");

  return (
    <Flex className={SectionStyle}>
      <Box
        mb={"sm"}
        style={{ borderRadius: "50%", overflow: "hidden" }}
        w={{ base: 100, md: 120 }}
        h={{ base: 100, md: 120 }}>
        <Image
          component={NextImage}
          src={profileImage}
          alt="Profile Picture"
          width={120}
          height={120}
          placeholder="blur"
        />
      </Box>
      <Text className={emText}>{profile.name}</Text>
      <Text>{profile.description}</Text>

      <ActionIconGroup>
        <ActionIcon component="a" href={profile.email} variant="subtle" size={"sm"}>
          <MailAtSign01Icon />
        </ActionIcon>
        <ActionIcon component="a" href={profile.github} variant="subtle" size={"sm"}>
          <Github01Icon />
        </ActionIcon>
        <ActionIcon component="a" href={profile.github} variant="subtle" size={"sm"}>
          <Github01Icon />
        </ActionIcon>
        <ActionIcon component="a" href={profile.github} variant="subtle" size={"sm"}>
          <Github01Icon />
        </ActionIcon>
        <ActionIcon component="a" href={profile.github} variant="subtle" size={"sm"}>
          <Github01Icon />
        </ActionIcon>
        <ActionIcon component="a" href={profile.github} variant="subtle" size={"sm"}>
          <Github01Icon />
        </ActionIcon>
      </ActionIconGroup>
    </Flex>
  );
}
