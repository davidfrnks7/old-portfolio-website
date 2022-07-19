export interface WorkPlace {
  name: string; // Name of company
  yearStart: number; // year started
  yearEnd: number | null; // year left
  role: string; // title of the role
  desc: string; // description of role
}

type Work = WorkPlace[];

const work: Work = [
  {
    name: "CGI",
    yearStart: 2022,
    yearEnd: null,
    role: "Java Software Engineer",
    desc: "Developed webapps for clients using Java, Spring, Angular, Bootstrap, and other technologies and frameworks."
  }
];

export default work;
