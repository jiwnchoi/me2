"use client";

import { createRef } from "react";
import en from "./en.mdx";
import ko from "./ko.mdx";

const content: CVContent = {
  en,
  ko,
  contentRef: createRef(),
};

export default content;
