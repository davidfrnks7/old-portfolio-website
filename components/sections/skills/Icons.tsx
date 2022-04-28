import React from "react";
import { Icon } from "@iconify/react";

export type IconTuple = [string, JSX.Element];
export type Icons = IconTuple[];
type IconsArr = Icons[];

const iconsColor = "#00aec1";

const languages: Icons = [
  [
    "JavaScript",
    <Icon
      key="JavaScript"
      color={iconsColor}
      icon="akar-icons:javascript-fill"
    />
  ],
  [
    "TypeScript",
    <Icon key="TypeScript" color={iconsColor} icon="cib:typescript" />
  ],
  ["Java", <Icon key="Java" color={iconsColor} icon="cib:java" />],
  [
    "Python",
    <Icon key="Python" color={iconsColor} icon="akar-icons:python-fill" />
  ],
  [
    "HTML5",
    <Icon key="HTML5" color={iconsColor} icon="ant-design:html5-filled" />
  ],
  ["CSS3", <Icon key="CSS3" color={iconsColor} icon="bx:bxl-css3" />]
];

const libraries: Icons = [
  [
    "React | React Hooks",
    <Icon key="React" color={iconsColor} icon="akar-icons:react-fill" />
  ],
  [
    "React Router",
    <Icon
      key="React Router"
      color={iconsColor}
      icon="simple-icons:reactrouter"
    />
  ],
  [
    "React Redux",
    <Icon key="React Redux" color={iconsColor} icon="akar-icons:redux-fill" />
  ],
  [
    "JQuery",
    <Icon key="JQuery" color={iconsColor} icon="akar-icons:jquery-fill" />
  ]
];

const frameworks: Icons = [
  [
    "Next.js",
    <Icon key="Next.js" color={iconsColor} icon="akar-icons:nextjs-fill" />
  ]
];

const runtime: Icons = [
  ["Node.js", <Icon key="Node.js" color={iconsColor} icon="la:node" />],
  [
    "Apollo GraphQL",
    <Icon
      key="apolloGraphQL"
      color={iconsColor}
      icon="simple-icons:apollographql"
    />
  ]
];

const deployment: Icons = [
  [
    "Vercel",
    <Icon key="Vercel" color={iconsColor} icon="akar-icons:vercel-fill" />
  ],
  ["AWS", <Icon key="Amazon Web Services" color={iconsColor} icon="mdi:aws" />],
  [
    "GCloud",
    <Icon key="Google Cloud" color={iconsColor} icon="bx:bxl-google-cloud" />
  ],
  [
    "Docker",
    <Icon key="Docker" color={iconsColor} icon="grommet-icons:docker" />
  ],
  [
    "DigitalOcean",
    <Icon key="DigitalOcean" color={iconsColor} icon="gg:digitalocean" />
  ]
];

const codeAnalysis: Icons = [
  ["ESLint", <Icon key="ESLint" color={iconsColor} icon="cib:eslint" />],
  ["Prettier", <Icon key="Prettier" color={iconsColor} icon="cib:prettier" />]
];

const versionControl: Icons = [
  ["git", <Icon key="git" color={iconsColor} icon="bx:bxl-git" />]
];

const stylingFrameworks: Icons = [
  [
    "Chakra UI",
    <Icon key="Chalra UI" color={iconsColor} icon="simple-icons:chakraui" />
  ],
  [
    "BootStrap",
    <Icon key="BootStrap" color={iconsColor} icon="bi:bootstrap" />
  ],
  ["Sass", <Icon key="Sass" color={iconsColor} icon="fa-brands:sass" />]
];

const apis: Icons = [
  [
    "GraphQL",
    <Icon key="GraphQL" color={iconsColor} icon="akar-icons:graphql-fill" />
  ] /*,
  [
    "Axios",
    <Icon key="Axios" color={iconsColor} icon="logos:axios" />
  ]*/
];

const paymentGateways: Icons = [
  ["Stripe", <Icon key="Stripe" color={iconsColor} icon="cib:stripe" />]
];

const databases: Icons = [
  [
    "PostgreSQL",
    <Icon key="PostgreSQL" color={iconsColor} icon="cib:postgresql" />
  ],
  ["MongoDB", <Icon key="MongoDB" color={iconsColor} icon="cib:mongodb" />],
  ["MySQL", <Icon key="MySQL" color={iconsColor} icon="simple-icons:mysql" />]
];

const ide: Icons = [
  [
    "Visual Studio Code",
    <Icon
      key="Visual Studio Code"
      color={iconsColor}
      icon="akar-icons:vscode-fill"
    />
  ],
  [
    "IntelliJ IDEA",
    <Icon key="IntelliJ IDEA" color={iconsColor} icon="cib:intellijidea" />
  ]
];

const icons: IconsArr = [
  languages,
  libraries,
  frameworks,
  runtime,
  deployment,
  codeAnalysis,
  versionControl,
  stylingFrameworks,
  apis,
  paymentGateways,
  databases,
  ide
];

export default icons;
