import { Icons } from "@/components/icons";

export const DATA = {
  firstName: "Asgard",
  name: "Asgard Pavlov",
  initials: "AP",
  url: "https://asgardpavlov.com",
  location: "Subotica, Serbia",
  locationLink: "https://www.google.com/maps/place/Subotica,+Serbia/@46.093545,19.5093146,11z/data=!3m1!4b1!4m6!3m5!1s0x474366c168af38f9:0xdf19bd922a3d838e!8m2!3d46.0969581!4d19.65763!16zL20vMDE4N2p0?entry=ttu",
  description:
    "(0→1) Full Stack Engineer",
  summary: "" +
    "This website is dedicated to my potential collaborators:" +
    "\n\n" +
    "- clients" +
    "\n" +
    "- investors" +
    "\n" +
    "- employers" +
    "\n" +
    "- friends" +
    "\n\n" +
    "It's also my digital gallery of creations and thoughts that I want to share with the world." +
    "\n\n" +
    "So welcome — I'm glad you're here!" +
    "",
  avatarUrl: "/me.png",
  programmingLanguages: [
    "Typescript",
    "JavaScript",
    "Python",
    "SQL",
    "Bash",
  ],
  technologiesFrameworks: [
    "Next.js",
    "React",
    "React.Native",
    "FastAPI",
    "Django",
    "Apollo/GraphQL/Prisma",
    "HTML/CSS",
    "Tailwind",
    "Docker",
    "PostgreSQL"
  ],
  deploymentTools: [
    "AWS",
    "Digital Ocean",
    "Github Actions",
    "CircleCI",
    "Docker Hub",
  ],
  contact: {
    email: "pasgard9@gmail.com",
    tel: "+7755336756",
    social: {
      GitHub: {
        url: "https://github.com/AsgardPavlov",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/asgard-pavlov/",
        icon: Icons.linkedin,
      },
      Telegram: {
        url: "https://t.me/AsgardPavlov",
        icon: Icons.telegram,
      },
    },
  },

  work: [
    {
      company: "Usekilo",
      href: "https://usekilo.com",
      // badges: ["SaaS"],
      location: "Remote (USA)",
      title: "Full Stack Engineer",
      logoUrl: "/logos/usekilo_logo.jpeg",
      start: "October 2022",
      end: "Present",
      description:
        "Gym Management Software used world-wide with over 40k users and 150 gyms"
    },
    {
      company: "WeGoWhere",
      href: "https://www.wegowhere.com/",
      // badges: ["Social Network", "Mobile"],
      location: "Remote (Singapore)",
      title: "Full Stack Engineer",
      logoUrl: "/logos/wegowhere_logo.jpeg",
      start: "April 2024",
      end: "April 2024",
      description: "Social Network with over 200k users"
    },
    {
      company: "Owl Technology",
      href: "",
      // badges: ["Digital Agency"],
      location: "Remote (Kazakhstan)",
      title: "Full Stack Engineer",
      logoUrl: "/logos/owl_technology_marketing_logo.jpeg",
      start: "July 2022",
      end: "October 2024",
      description:
        "Development Agency"
        // "• Developing and maintaining Next, React, React.Native, Django, and FastAPI applications.\n" +
        // "• Deploying and managing applications on AWS and Digital Ocean cloud services.\n" +
        // "• Integrating third-party APIs (Stripe, SendGrid, Google, etc.).\n" +
        // "• Releasing apps on Google Play Store.",
    },
    // {
    //   company: "Usekilo",
    //   badges: [],
    //   href: "https://usekilo.com",
    //   location: "Remote (USA)",
    //   title: "Full Stack Engineer",
    //   logoUrl: "/logos/usekilo_logo.jpeg",
    //   start: "October 2022",
    //   end: "January 2024",
    //   description:
    //     "Gym Management Software used world-wide with over 40k users and over 150 gyms"
    //     // "• Developed and launched Kilo App’s beta and stable v1 versions for over 20k users.\n" +
    //     // "• Designed tools to streamline document migrations across 100+ gyms, processing 500 PDFs per gym, boosting operational efficiency.\n" +
    //     // "• Integrated Cypress tests into CircleCI CI/CD, reducing bug discovery time, improving software quality and release speed.\n" +
    //     // "• Led frontend development, collaborating with the product manager to define feature UI and creating original designs. Enhanced UX/UI, increasing user engagement through innovative, user-focused designs.\n" +
    //     // "• Ranked third among top contributors in our monorepo, highlighting commitment to code quality and team- work.",
    // },
    {
      company: "KozhinDev",
      href: "https://kozhindev.com/",
      // badges: ["Web Studio", "Open-source"],
      location: "On-site",
      title: "Frontend Developer",
      logoUrl: "/logos/kozhindev-logo.jpeg",
      start: "June 2021",
      end: "June 2022",
      description:
        "• Contributed to open-source UI ecosystem libraries, React-Steroids and React-Bootstrap.\n" +
        "• Developed SPA and SSR applications with Steroids.\n" +
        "• Implemented pixel-perfect design systems following the BEM class naming standard.\n" +
        "• Developed and maintained REST APIs using NestJS, TypeORM, and PostgreSQL.\n",
    },
  ],
  education: [
    {
      school: "nFactorial Incubator",
      href: "http://incubator.nfactorial.school/",
      degree: "Full Stack Developer | 10-week programming bootcamp",
      logoUrl: "/logos/nf_logo.jpeg",
      start: "June 2022",
      end: "August 2022",
      description: undefined,
    },
    {
      school: "Siberian Federal University",
      href: "https://www.sfu-kras.ru/en",
      degree: "Applied Computer Science | Bachelor's Degree",
      logoUrl: "/logos/sfu_logo.jpeg",
      start: "2019",
      end: "2023",
      description: "Didn't finish and don't regret it in meantime."
    },
  ],
  projects: [
    {
      title: "Polyform",
      href: "https://thepolyform.com",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "A [TypeForm](https://www.typeform.com/) alternative that lets you create flexible forms for any business need, " +
        "easily embedded in React applications. \n\n\n" +
        "Try it free—just log in with Google",
      technologies: [
        "Python",
        "TypeScript",
        "FastAPI",
        "Next.js",
        "PostgreSQL",
        "Github Actions",
        "Digital Ocean",
      ],
      links: [
        {
          type: "Website",
          href: "https://thepolyform.com/login",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/projects/thepolyform.png",
      video: "",
    },
  ],
} as const;
