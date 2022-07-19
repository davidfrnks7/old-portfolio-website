export interface Program {
  name: string; // Name of school
  year?: number; // year completed
  desc: string; // description of school or program.
}

type Education = Program[];

const education: Education = [
  // {
  //   name: "CGI Java Academy",
  //   year: 2022,
  //   desc: "An internal, bootcamp like course, focusing on Java, Spring, Bootstrap, Angular, and TypeScript."
  // },
  {
    name: "Operation Spark",
    year: 2021,
    desc: "1000 hour software engineering bootbamp derived from Hack Reactor, utilizing a lot of the same principals, methodologies, and material, focusing on functional webapp development in Javascript utilizing frameworks such as React, Angular, and Typescript. The course focused heavily on teamwork and working with a team to build projects and apps."
  },
  {
    name: "John Ehret High School",
    desc: "Core 4 High School Diploma. Extra curricular courses in IT."
  }
];

export default education;
