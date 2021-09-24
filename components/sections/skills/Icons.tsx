import React from "react";
import { Icon } from "@chakra-ui/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faAws,
  faDigitalOcean,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faAws,
  faDigitalOcean,
  faDocker,
  faGitAlt
);
import TS from "../../../public/icons/TS.svg";
import GCloud from "../../../public/icons/GCloud.svg";
import Vercel from "../../../public/icons/Vercel.svg";
import Axios from "../../../public/icons/Axios.svg";
import BootStrap from "../../../public/icons/BootStrap.svg";
import ChakraUI from "../../../public/icons/ChakraUI.svg";
import PostgreSQL from "../../../public/icons/PostgreSQL.svg";
import GraphQL from "../../../public/icons/GraphQL.svg";
import MongoDB from "../../../public/icons/MongoDB.svg";
import MySQL from "../../../public/icons/MySQL.svg";
import Nodejs from "../../../public/icons/Nodejs.svg";
import Nextjs from "../../../public/icons/Nextjs.svg";
import VSCode from "../../../public/icons/VSCode.svg";
import JQuery from "../../../public/icons/JQuery.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type IconTuple = [string, JSX.Element];
type Icons = IconTuple[];

const icons: Icons = [
  ["JavaScript", <FontAwesomeIcon key="JavaScript" icon={faJs} />],
  ["TypeScrip", <Icon key="TypeScript" as={TS} />],
  ["HTML5", <FontAwesomeIcon key="HTML5" icon={faHtml5} />],
  ["CSS3", <FontAwesomeIcon key="CSS3" icon={faCss3Alt} />],
  [
    "React | React Hooks | React Router",
    <FontAwesomeIcon key="React" icon={faReact} />,
  ],
  ["Next.js", <Icon key="Next.js" as={Nextjs} />],
  ["Vercel", <Icon key="Vercel" as={Vercel} />],
  ["Node.js", <Icon key="Node.js" as={Nodejs} />],
  ["AWS", <FontAwesomeIcon key="Amazon Web Services" icon={faAws} />],
  [
    "DigitalOcean",
    <FontAwesomeIcon key="DigitalOcean" icon={faDigitalOcean} />,
  ],
  ["GCloud", <Icon key="GCloud" as={GCloud} />],
  ["Docker", <FontAwesomeIcon key="Docker" icon={faDocker} />],
  ["git", <FontAwesomeIcon key="git" icon={faGitAlt} />],
  ["BootStrap", <Icon key="BootStrap" as={BootStrap} />],
  ["Chakra UI", <Icon key="Chakra UI" as={ChakraUI} />],
  ["Axios", <Icon key="Axios HTTP" as={Axios} />],
  ["GraphQL", <Icon key="GraphQL" as={GraphQL} />],
  ["PostgreSQL", <Icon key="PosgreSQL" as={PostgreSQL} />],
  ["MongoDB", <Icon key="MongoDB" as={MongoDB} />],
  ["MySQL", <Icon key="MySQL" as={MySQL} />],
  [
    "Visual Studio Code | Visual Studio",
    <Icon key="Visual Studio Code" as={VSCode} />,
  ],
  ["JQuery", <Icon key="JQuery" as={JQuery} />],
];

export default icons;
