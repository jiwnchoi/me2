"use server";

import profileImage from "@/contents/profile/profilepic.png";
import { getLocaleContent } from "@/utils";
import { Box, Image } from "@mantine/core";
import NextImage from "next/image";

interface ProfileProps {
  locale: Locale;
}

export default async function Profile({ locale }: ProfileProps) {
  const profile = await getLocaleContent(locale, "contents/profile");

  return (
    <Box>
      <Box
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
      {profile.name}
      {profile.description}
    </Box>
  );
}
