import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  appwrite,
  php,
  nextjs,
  cogent,
  adacell,
  fillip,
  innovovision,
  paypines,
  self,
  threads,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Fronted Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Freelance Full Stack Engineer",
    company_name: "Self Employed",
    icon: self,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "File-based Routing to simplify navigation and ensure scalability across different application pages.",
      "Ensured that web applications were fully responsive across a range of devices and screen sizes, using modern CSS frameworks like Tailwind CSS, Shadcn-UI and Material-UI for styling and design consistency.",
      "Developed RESTful APIs and integrated GraphQL APIs to handle dynamic data requests between the front-end and back-end. By using Node.js, I ensured that these APIs were scalable, modular, and easy to maintain.",
      "Integrated NextAuth.js and Clerk into Next.js applications for seamless authentication and user management. Leveraged built-in authentication providers (Google, GitHub, etc.) and custom email/password authentication for user login.",
      "Collaborated with design teams to translate static designs into functional, interactive user interfaces using React.js and Next.js. By leveraging reusable components, I maintained a consistent design language across the application, enhancing both usability and user experience.",
      "Implemented server-side rendering (SSR) in Next.js to optimize page load times and improve SEO, ensuring that web pages are indexed efficiently by search engines. Additionally, I used static site generation (SSG) to pre-render pages at build time for faster delivery and enhanced performance.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "PayPines Financial Services",
    icon: paypines,
    iconBg: "#E6DEDD",
    date: "August 2021 - February 2022",
    points: [
      "Assisted in database design and optimization, focusing on data integrity and query performance.",
      "Collaborated with front-end developers to integrate APIs and deliver a seamless user experience.",
      "Integrated third-party APIs and services, improving application functionality and user experience.",
      "Engaged in troubleshooting and debugging complex issues to improve application stability and security.",
      "Optimized database queries and managed large-scale database systems (MySQL), achieving significant performance improvements.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Innovovision Technology",
    icon: innovovision,
    iconBg: "#E6DEDD",
    date: "February 2019 - July 2021",
    points: [
      "Created reusable components and libraries, improving development efficiency and consistency across projects.",
      "Mentored junior developers, providing guidance on best practices and fostering a collaborative team environment.",
      "Conducted performance optimization and debugging of applications, ensuring smooth functionality and user experience.",
      "Integrated authentication and authorization systems, including session management, user roles, and permissions for enhanced security.",
      "Worked closely with cross-functional teams including UI/UX designers, QA engineers, and project managers to deliver high-quality software solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Fillip Technologies",
    icon: fillip,
    iconBg: "#E6DEDD",
    date: "February 2018 - January 2019",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed, developed, and maintained websites and web applications using PHP, ensuring high performance and responsiveness.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Engaged directly with clients to understand and document requirements, delivering tailored software solutions that met client specifications and expectations.",
    ],
  },
  {
    title: "Telecommunications Engineer",
    company_name: "Adacell Technology",
    icon: adacell,
    iconBg: "#E6DEDD",
    date: "April 2017 - January-2018",
    points: [
      "The radio transmitter, receiver and transceiver were installed and tested for proper functioning.",
      "Aligned with project budgets to minimize costs and delays, meeting timely deadlines and quality standards.",
      "Advanced simulation software was used for predictive analysis of RF system performance, leading to strategic improvements.",
      "Streamlined operational processes by automating routine telecommunications tasks, freeing up resources for strategic projects.",
      "Delivered training sessions on RF engineering principles to junior staff, fostering a culture of continuous learning and development.",
    ],
  },
  {
    title: "Customer Support Associate",
    company_name: "Cogent E Services",
    icon: cogent,
    iconBg: "#E6DEDD",
    date: "January 2017 - March 2017",
    points: [
      "Worked with energy and determination to maintain efficient customer service during peak business hours.",
      "Handled customer complaints calmly and professionally, providing positive solutions to uphold company reputation.",
      "Responded to live chat rooms to answer and resolve customer queries, elevating customer satisfaction with immediate support.",
      "Participated in weekly team meetings to discuss challenges and share best practices. Monitored email to promptly collect and respond to complaints.",
      "The primary point of contact for customer questions, complaints, and assistance and respond to customers through various channels, such as phone, email, live chat, and social media.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Threads Application",
    description:
      "Build a full stack Threads clone using Next.js 14+ with a redesigned look transformed from a Figma design, user interaction to community management, technical implementation, and various features, including nested deep comments, notifications, real-time-search, and more",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/Abej-Rijwi/threads",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
