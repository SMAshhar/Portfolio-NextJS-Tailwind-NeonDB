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
        title: "Project Engineer - Aisha Steel Mills",
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