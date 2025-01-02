import profileImage from "@/contents/bio/profilepic.png";
import { Box, Image } from "@mantine/core";
import NextImage from "next/image";

export default function Profile() {
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
    </Box>
  );
}
