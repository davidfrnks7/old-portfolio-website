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
    desc: "Junior Java developer in a team of 8. My responsibilities included creating static and dynamic external correspondence tax documents with AEM, developing Java code in JBOSS for dynamic forms, maintaining design artifacts and mockups from the client in SharePoint, regular reviews with the client to confirm forms adhered to design documents and mockups provided. Utilized Azure DevOps (TFS) to track development, testing, design/code review, and bug/defect tasks through the development lifecycle. Maintained records of forms and documents in SQL and DB2 databases, including creating custom SQL queries as needed. Tested in PEGA with production-ready environments to simulate creating cases, advancing case stages, closing cases, and verifying forms were being created and updated as necessary based on the stage of the case and data available in PEGA through to its completion."
    // desc: "Worked on a modernization project for a local government agency. The project aimed to cut down on operation costs by speeding up system load times, Java api generation, and moving legacy platforms onto Pega. The overhaul sped up existing infrastructure and API load times by 60%, reduced time spent on tasks by 40%, and saved the government $600,000."
    // desc: "Developed webapps for clients using Java, Spring, Angular, Bootstrap, and other technologies and frameworks."
  }
];

export default work;
