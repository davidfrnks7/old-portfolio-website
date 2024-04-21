export interface Program {
  name: string; // Name of school
  year?: number; // year completed
  desc: string; // description of school or program.
}

type Education = Program[];

const education: Education = [
  {
    name: "CGI Java Training",
    year: 2022,
    desc: "An eight-week training program where a Full Stack Application was built, tested, and deployed. Included  instruction on core Java with a focus on applying and implementing programming concepts and OO programming, data structures, and search and sort algorithms. It Focused on hands-on labs to build and test Java programs in Java 8 and building responsive web pages including UI/UX and front-end design."
  },
  {
    name: "Operation Spark",
    year: 2021,
    desc: "Immersive coding bootcamp derived from Hack Reactor, using a lot of the same methodologies. Putting students through 1000+ hours of hands-on coding with JavaScript starting with basics and fundamentals, then deep diving into relational and non-relational databases, node.js, app deployment, app bundling,  and frameworks JS like React.js. App development heavily focused on teamwork and pair programming."
  },
  {
    name: "John Ehret High School",
    desc: "Core 4 High School Diploma. Extra curricular courses in IT."
  }
];

export default education;
