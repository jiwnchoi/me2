"use client";

import { createRef } from "react";
import en from "./en.mdx";

const content: CVContent = {
  en,
  ko: en,
  contentRef: createRef(),
};

export default content;
