import React from "react";
import { Icon } from "@chakra-ui/react";
import { IconDefinition, IconName, IconPathData, IconPrefix, library } from "@fortawesome/fontawesome-svg-core";
import { faJs, faHtml5, faCss3Alt, faReact, faAws, faDigitalOcean, faDocker, faGitAlt } from "@fortawesome/free-brands-svg-icons";
library.add(faJs, faHtml5, faCss3Alt, faReact, faAws, faDigitalOcean, faDocker, faGitAlt);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TS from "../../../public/icons/TS.svg"
import GCloud from "../../../public/icons/GCloud.svg"
import Vercel from "../../../public/icons/Vervel.svg"
import Axios from "../../../public/icons/Axios.svg"
import BootStrap from "../../../public/icons/BootStrap.svg"
import ChakraUI from "../../../public/icons/ChakraUI.svg"
import PostgreSQL from "../../../public/icons/PostgreSQL.svg"
import GraphQL from "../../../public/icons/GraphQL.svg"
import MongoDB from "../../../public/icons/MongoDB.svg"
import MySQL from "../../../public/icons/MySQL.svg"
import Nodejs from "../../../public/icons/Nodejs.svg"
import Nextjs from "../../../public/icons/Nextjs.svg"
import VSCode from "../../../public/icons/VSCode.svg"
import JQuery from "../../../public/icons/JQuery.svg"

type IconTuple = [string, IconDefinition | JSX.Element]
type Icons = IconTuple[]

const icons: Icons = [
  ["JavaScript", faJs],
  ["TypeScrip", (
    <Icon
      key="TypeScript"
      as={TS}
    />
  )],
  ["HTML5", faHtml5],
  ["CSS3", faCss3Alt],
  ["React | React Hooks | React Router", faReact],
  ["Next.js", (
    <Icon
      key="Next.js"
      as={Nextjs}
    />
  )],
  ["Vercel", (
    <Icon
      key="Vercel"
      as={Vercel}
    />
  )],
  ["Node.js", (
    <Icon
      key="Node.js"
      as={Nodejs}
    />
  )],
  ["AWS Deployment", faAws],
  ["DigitalOcean", faDigitalOcean],
  ["GCloud", (
    <Icon
      key="GCloud"
      as={GCloud}
    />
  )],
  ["Docker", faDocker],
  ["git", faGitAlt],
  ["BootStrap", (
    <Icon
      key="BootStrap"
      as={BootStrap}
    />
  )],
  ["Chakra UI", (
    <Icon
      key="Chakra UI"
      as={ChakraUI}
    />
  )],
  ["Axios", (
    <Icon
      key="Axios HTTP"
      as={Axios}
    />
  )],
  ["GraphQL", (
    <Icon
      key="GraphQL"
      as={GraphQL}
    />
  )],
  ["PostgreSQL", (
    <Icon
      key="PosgreSQL"
      as={PostgreSQL}
    />
  )],
  ["MongoDB", (
    <Icon
      key="MongoDB"
      as={MongoDB}
    />
  )],
  ["MySQL", (
    <Icon
      key="MySQL"
      as={MySQL}
    />
  )],
  ["Visual Studio Code | Visual Studio", (
    <Icon
      key="Visual Studio Code"
      as={VSCode}
    />
  )],
  ["JQuery", (
    <Icon
      key="JQuery"
      as={JQuery}
    />
  )],
];

class FaIcon implements IconDefinition {
  icon!: [number, number, string[], string, IconPathData];
  prefix!: IconPrefix;
  iconName!: IconName;

}

const I = (icon: IconTuple) => {
  return icon[1] instanceof FaIcon
    ?
    (
      <FontAwesomeIcon
        key={icon[0]}
        icon={icon[1]}
      />
    )
    :
    (
      icon[1]
    )
};