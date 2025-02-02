import { SectionStyle, textEmphasize } from "@/styles/defined.css";

import { getLocaleContent } from "@/utils";
import { ActionIcon, ActionIconGroup, Box, Flex, Image, Text } from "@mantine/core";
import NextImage from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

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
          src={"/assets/profile/profilepic.png"}
          alt="Profile Picture"
          width={120}
          height={120}
        />
      </Box>
      <Flex mb={"sm"} direction="column" align="center">
        <Text className={textEmphasize}>{profile.name}</Text>
        <Text>{profile.description}</Text>
      </Flex>

      <Flex component={ActionIconGroup} gap={"xs"}>
        {"email" in profile && (
          <ActionIcon component="a" href={profile.email} variant="subtle" size={"sm"} radius={"md"}>
            <FaEnvelope />
          </ActionIcon>
        )}
        {"scholar" in profile && (
          <ActionIcon
            component="a"
            href={profile.scholar}
            variant="subtle"
            size={"sm"}
            radius={"md"}>
            <FaGraduationCap />
          </ActionIcon>
        )}
        {"github" in profile && (
          <ActionIcon
            component="a"
            href={profile.github}
            variant="subtle"
            size={"sm"}
            radius={"md"}>
            <FaGithub />
          </ActionIcon>
        )}
        {"linkedin" in profile && (
          <ActionIcon
            component="a"
            href={profile.linkedin}
            variant="subtle"
            size={"sm"}
            radius={"md"}>
            <FaLinkedin />
          </ActionIcon>
        )}
        {"instagram" in profile && (
          <ActionIcon
            component="a"
            href={profile.instagram}
            variant="subtle"
            size={"sm"}
            radius={"md"}>
            <FaInstagram />
          </ActionIcon>
        )}
        {"twitter" in profile && (
          <ActionIcon
            component="a"
            href={profile.twitter}
            variant="subtle"
            size={"sm"}
            radius={"md"}>
            <FaXTwitter />
          </ActionIcon>
        )}
      </Flex>
    </Flex>
  );
}
