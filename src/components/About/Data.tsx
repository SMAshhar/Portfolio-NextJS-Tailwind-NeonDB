import React from "react";
import { ReactElement } from "react";


// icons

import {
  SiReact,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiSanity,
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiFastapi,
  SiPostgresql,
  SiPoetry,
  SiPython,
  SiOpenai,
  SiVercel,
  SiMeta,
  SiGoogle,
} from "react-icons/si";


type Icon = ReactElement;

interface SkillInfo {
  title: string;
  icons?: Icon[];
  stage?: string;
}

interface AboutDataItem {
  title: string;
  info: SkillInfo[];
}
//  data
export const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Microservices",
        icons: [
          <SiFastapi key={'h'} />,
          <SiPoetry key={'f'} />,
          <SiPython key={'g'} />,
          <SiNextdotjs key={'i'} />,
          <SiVercel key={'j'} />,
          <SiPostgresql key={'e'} />,
          // <FaWordpress />,
        ],
      },
      {
        title: "GenerativeAI",
        icons: [
          <SiOpenai key={'a'} />,
          <SiMeta key={'b'} />,
          <SiGoogle key={'c'} />
        ],
      },
      {
        title: "Web Development",
        icons: [
          <SiReact key={'h'} />,
          <SiNextdotjs key={'e'} />,
          <SiTailwindcss key={'f'} />,
          <SiTypescript key={'g'} />,
          <SiSanity key={'i'} />,
          <SiFramer key={'j'} />,
          // <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <SiFigma key={'a'} />,
          <SiAdobexd key={'b'} />,
          <SiAdobephotoshop key={'c'} />
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "AI and Fullstack Developer - Fiverr",
        stage: "2021-Now",
      },
      {
        title: "Lead Engineer - Aisha Steel Mills",
        stage: "2018-Now",
      },
      {
        title: "Project Engineer - Midas Safety Inc.",
        stage: "2015-2018",
      },
      {
        title: "R&D - Midas Safety Inc.",
        stage: "2012-2015",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Certified Cloud Applied GenAI Engineer - PIAIC",
        stage: "ongoing",
      },
      {
        title: "Certified Artificial Intelligence Developer - PIAIC",
        stage: "2022",
      },
      {
        title: "4 years Bachlor at Engineering - NEDUET",
        stage: "2012",
      },
    ],
  },
];