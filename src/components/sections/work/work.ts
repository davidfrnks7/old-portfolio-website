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
    desc: "Worked on a modernization project for a local government agency. The project aimed to cut down on operation costs by speeding up system load times, Java api generation, and moving legacy platforms onto Pega. The overhaul sped up existing infrastructure and API load times by 60%, reduced time spent on tasks by 40%, and saved the government $600,000."
    // desc: "Developed webapps for clients using Java, Spring, Angular, Bootstrap, and other technologies and frameworks."
  }
];

export default work;
