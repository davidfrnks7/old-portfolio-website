import React from "react";
import { Icon } from "@iconify/react";

export type IconTuple = [string, JSX.Element];
type Icons = IconTuple[];

const iconsColor = "#00aec1";

const icons: Icons = [
  [
    "JavaScript",
    <Icon
      key="JavaScript"
      color={iconsColor}
      icon="akar-icons:javascript-fill"
    />,
  ],
  [
    "TypeScript",
    <Icon key="TypeScript" color={iconsColor} icon="cib:typescript" />,
  ],
  [
    "HTML5",
    <Icon key="HTML5" color={iconsColor} icon="ant-design:html5-filled" />,
  ],
  ["CSS3", <Icon key="CSS3" color={iconsColor} icon="bx:bxl-css3" />],
  [
    "React | React Hooks | React Router",
    <Icon key="React" color={iconsColor} icon="akar-icons:react-fill" />,
  ],
  [
    "Next.js",
    <Icon key="Next.js" color={iconsColor} icon="akar-icons:nextjs-fill" />,
  ],
  [
    "Vercel",
    <Icon key="Vercel" color={iconsColor} icon="akar-icons:vercel-fill" />,
  ],
  ["Node.js", <Icon key="Node.js" color={iconsColor} icon="la:node" />],
  ["AWS", <Icon key="Amazon Web Services" color={iconsColor} icon="mdi:aws" />],
  [
    "GCloud",
    <Icon key="Google Cloud" color={iconsColor} icon="bx:bxl-google-cloud" />,
  ],
  [
    "Docker",
    <Icon key="Docker" color={iconsColor} icon="grommet-icons:docker" />,
  ],
  [
    "DigitalOcean",
    <Icon key="DigitalOcean" color={iconsColor} icon="gg:digitalocean" />,
  ],
  ["git", <Icon key="git" color={iconsColor} icon="bx:bxl-git" />],
  [
    "Chakra UI",
    <Icon key="Chalra UI" color={iconsColor} icon="simple-icons:chakraui" />,
  ],
  [
    "BootStrap",
    <Icon key="BootStrap" color={iconsColor} icon="bi:bootstrap" />,
  ],
  [
    "GraphQL",
    <Icon key="GraphQL" color={iconsColor} icon="akar-icons:graphql-fill" />,
  ],
  [
    "PostgreSQL",
    <Icon key="PostgreSQL" color={iconsColor} icon="cib:postgresql" />,
  ],
  ["MongoDB", <Icon key="MongoDB" color={iconsColor} icon="cib:mongodb" />],
  ["MySQL", <Icon key="MySQL" color={iconsColor} icon="simple-icons:mysql" />],
  [
    "Visual Studio Code | Visual Studio",
    <Icon
      key="Visual Studio Code"
      color={iconsColor}
      icon="akar-icons:vscode-fill"
    />,
  ],
  [
    "JQuery",
    <Icon key="JQuery" color={iconsColor} icon="akar-icons:jquery-fill" />,
  ],
];

export default icons;
