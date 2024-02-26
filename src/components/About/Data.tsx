import React, { useState } from "react";
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
const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <SiReact  key={'h'} />,
          <SiNextdotjs key={'e'}  />,
          <SiTailwindcss  key={'f'} />,
          <SiTypescript  key={'g'} />,
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
          <SiAdobephotoshop key={'c'} />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards-Honoree",
        stage: "2011-2012",
      },
      {
        title: "Adobe Design Achievement-Finalist",
        stage: "2009-2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer-XYZ Company",
        stage: "2012-2023",
      },
      {
        title: "Web Developer-ABC Agency",
        stage: "2010-2012",
      },
      {
        title: "Intern-DEF Corporation",
        stage: "2008-2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC, CA",
        stage: "2006",
      },
    ],
  },
];