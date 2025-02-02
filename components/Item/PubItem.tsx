import { textEm, textSub } from "@/styles/defined.css";
import { Anchor, Center, Flex, Highlight, Text } from "@mantine/core";
import { default as Link, default as NextLink } from "next/link";
import { Fragment } from "react";
import type { IconType } from "react-icons";
import { FaFilePdf, FaGithub, FaGlobe, FaVideo, FaVolumeHigh } from "react-icons/fa6";

interface PubLinks {
  pdfLink?: string;
  githubLink?: string;
  webDemoLink?: string;
  videoDemoLink?: string;
  talkLink?: string;
}

interface PubItemProps {
  title?: string;
  authorNames: string[];
  href?: string;
  pub: PubLinks;
  venues: string[];
}

export default function PubItem({ title, authorNames, pub, venues }: PubItemProps) {
  return (
    <Flex w={"100%"} direction="column" gap={1}>
      <Text component="p" className={textEm}>
        {title}
      </Text>
      <Text component="p">
        <PubAuthors authorNames={authorNames} />
      </Text>
      {venues.map((venue, index) => (
        <Text key={`${title}-venue${index}`} component="p" className={textSub}>
          {venue}
        </Text>
      ))}

      <PubLinks pub={pub} />
    </Flex>
  );
}

function PubAuthors({ authorNames }: { authorNames: string[] }) {
  return authorNames.map((author, index) => (
    <Fragment key={`authorNames${index}`}>
      <Anchor component={Link} href={authors.find((a) => a.name === author)?.url ?? ""}>
        <Highlight component="span" highlight={["Jiwon Choi"]} style={{ fontStyle: "italic" }}>
          {author}
        </Highlight>
      </Anchor>
      {index < authorNames.length - 1 && (
        <Text component="span" style={{ fontStyle: "italic" }}>
          {index === authorNames.length - 2
            ? authorNames.length === 2
              ? " and "
              : ", and "
            : ", "}
        </Text>
      )}
    </Fragment>
  ));
}

const authors = [
  {
    name: "Jiwon Choi",
    url: "https://jiwnchoi.me",
  },
  {
    name: "Jaemin Jo",
    url: "https://www.jaeminjo.com",
  },
  {
    name: "Myeongwon Jung",
    url: "https://www.linkedin.com/in/%EB%AA%85%EC%9B%90-%EC%A0%95-07839b262/",
  },
  {
    name: "Jaeung Lee",
    url: "https://github.com/gnueaj",
  },
  {
    name: "Sehi L'Yi",
    url: "https://sehilyi.com/",
  },
  {
    name: "Seojin Kim",
    url: "https://www.linkedin.com/in/%EC%84%9C%EC%A7%84-%EA%B9%80-0363aa259/",
  },
];

function PubButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: IconType;
  children: React.ReactNode;
}) {
  return (
    <Anchor component={NextLink} href={href}>
      <Flex component={Center} gap={4}>
        <Icon size={12} />
        <Text size="sm">{children}</Text>
      </Flex>
    </Anchor>
  );
}

function PubLinks({ pub }: { pub: PubLinks }) {
  return (
    <Flex gap={12}>
      {pub.pdfLink && (
        <PubButton href={pub.pdfLink} icon={FaFilePdf}>
          PDF
        </PubButton>
      )}
      {pub.githubLink && (
        <PubButton href={pub.githubLink} icon={FaGithub}>
          GitHub
        </PubButton>
      )}
      {pub.webDemoLink && (
        <PubButton href={pub.webDemoLink} icon={FaGlobe}>
          Web Demo
        </PubButton>
      )}
      {pub.videoDemoLink && (
        <PubButton href={pub.videoDemoLink} icon={FaVideo}>
          Video Demo
        </PubButton>
      )}
      {pub.talkLink && (
        <PubButton href={pub.talkLink} icon={FaVolumeHigh}>
          Talk
        </PubButton>
      )}
    </Flex>
  );
}
