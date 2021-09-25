import React from "react";
import { Icon } from "@iconify/react";

export type IconTuple = [string, JSX.Element];
type Icons = IconTuple[];

const icons: Icons = [
  ["JavaScript", <Icon key="JavaScript" icon="fluent:javascript-24-filled" />],
  ["TypeScript", <Icon key="TypeScript" icon="cib:typescript" />],
  ["HTML5", <Icon key="HTML5" icon="ant-design:html5-filled" />],
  ["CSS3", <Icon key="CSS3" icon="bx:bxl-css3" />],
  [
    "React | React Hooks | React Router",
    <Icon key="React " icon="akar-icons:react-fill" />,
  ],
  ["Next.js", <Icon key="Next.js" icon="akar-icons:nextjs-fill" />],
  ["Vercel", <Icon key="Vercel" icon="akar-icons:vercel-fill" />],
  ["Node.js", <Icon key="Node.js" icon="la:node" />],
  ["AWS", <Icon key="Amazon Web Services" icon="mdi:aws" />],
  ["GCloud", <Icon key="Google Cloud" icon="bx:bxl-google-cloud" />],
  ["Docker", <Icon key="Docker" icon="grommet-icons:docker" />],
  ["DigitalOcean", <Icon key="DigitalOcean" icon="gg:digitalocean" />],
  ["git", <Icon key="git" icon="bx:bxl-git" />],
  ["Chakra UI", <Icon key="Chalra UI" icon="simple-icons:chakraui" />],
  ["BootStrap", <Icon key="BootStrap" icon="bi:bootstrap" />],
  ["GraphQL", <Icon key="GraphQL" icon="akar-icons:graphql-fill" />],
  ["PostgreSQL", <Icon key="PostgreSQL" icon="cib:postgresql" />],
  ["MongoDB", <Icon key="MongoDB" icon="cib:mongodb" />],
  ["MySQL", <Icon key="MySQL" icon="simple-icons:mysql" />],
  [
    "Visual Studio Code | Visual Studio",
    <Icon key="Visual Studio Code" icon="akar-icons:vscode-fill" />,
  ],
  ["JQuery", <Icon key="JQuery" icon="akar-icons:jquery-fill" />],
];

export default icons;
