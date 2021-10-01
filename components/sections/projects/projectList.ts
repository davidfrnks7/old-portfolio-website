export interface Project {
  name: string;
  date: string;
  description: string;
  tech?: string[];
  expanded?: string[];
  role?: string[];
  deployed: string;
  logo?: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    date: "2021 -  current",
    description:
      "A website to list my skills and demonstrate them for potential employers and clients to see.",
    tech: [
      "Next.js (React.js) in TypeScript",
      "Chakra UI for styling",
      "Formik for form validation",
      "Nodemailer to send forms through email",
    ],
    deployed: "It was deployed on Vercel and only has a frontend.",
    link: "https://github.com/davidfrnks7/portfolio-website",
  },
  {
    name: "Plexus Create",
    date: "2021 - 2021",
    description:
      "Plexus Create is a community-oriented platform for content creators, developers, artists, and other creatives to raise awareness on upcoming projects, recruit for full-time, part-time, or contract positions, and create crowdfunding campaigns for their creative endeavors.",
    tech: [
      "Next.js (React.js) in TypeScript",
      "Chalkra UI for styling",
      "Formik for form validation",
      "Day.js for date formatting and validation",
      "Stripe for payments",
      "Cloudinary for user submitted pictures",
      "GraphQL for interfacing and transactions with the database",
      "NextAuth for passwordless authentication",
      "TypeORM for the database transactions",
    ],
    role: [
      "Setup NextAuth and link the NextAuth tables to a profiles table",
      "Create a user flow after first signin to allow users to customize their profile",
      "Setup Cloudinary and link submissions to front end to allow users to submit custom pictures for their profile or app",
      "Setup a search feature using regex and added filters for the search",
    ],
    deployed: "It was deployed on Vercel and used PostgreSQL for the database",
    logo: "https://raw.githubusercontent.com/davidfrnks7/plexus-create/main/public/favicon.ico",
    link: "https://github.com/davidfrnks7/plexus-create",
  },
  {
    name: "Beastie Booze",
    date: "2021 - 2021",
    description:
      "BeastieBooze is a legacy to lookup drinks and how to make them. You can add your own concoctions to the website and add your favorites to your account.",
    tech: [
      "React.js in JavaScript",
      "Bootstrap for styling",
      "Yup for form validation",
      "SweetAlert for user feedback",
      "Moment.js for date formatting and validation",
      "Mongoose for transaction with the database",
      "Passport for passwordless authentication",
      "RESTful API for interfacing with the database",
    ],
    expanded: [
      "Added the ability to register a business within the app",
      "Add drinks to your business on a menu",
      "See which business sells which drink on their menu",
      "Search for businesses",
      "Implemented a simple point of sales system that tracked the volume of drinks sold",
      "Keep track of sales by quantity",
    ],
    role: [
      "Create a way to register a business",
      "Created a way to view reports for a user's business",
      "Used moment.js to filter and sort transactions by date",
      "Totalled the sorted transaction",
      "Used the totalled transactions to display statistics on a bar chart using chart.js",
      "Separated charts and stats by weekly and monthly basis",
    ],
    deployed:
      "The expanded app was deployed on GCloud (Google Cloud) and used MongoDB for the database.",
    link: "https://github.com/davidfrnks7/BeastieBooze",
  },
  {
    name: "Trailz",
    date: "2021 - 2021",
    description:
      "An app to find parks and trails near you, plan events and gatherings at them, save your favorite trails, and add ones that are not on Google Maps.",
    tech: [
      "React.js in JavaScript",
      "Bootstrap for styling",
      "Moment.js for date formatting and validation",
      "Mongoose for transaction with the database",
      "Passport for passwordless authentication",
      "RESTful API for interfacing with the database",
    ],
    role: [
      "Rendered Google Maps to the app",
      "Send user search queries to the Google Maps API and then render the results on the map",
      "Created a way for users to add events to the app using forms",
      "Used moment.js to format dates on event listings",
      "Added the ability for users to drop custom pins onto the map",
      "Allowed users to add the custom pins to their favorites and create events at them",
      "Rendered custom icons on the map to represent if the type of event planned at parks and trails",
      "Made the app responsive to screen size",
    ],
    deployed: "This app was not deployed, but used MongoDB for the database.",
    link: "https://github.com/davidfrnks7/trailz",
  },
];
