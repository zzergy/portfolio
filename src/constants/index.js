import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
  iba,
  thinkmarkets,
  bsu,
} from "../assets";
import wiara from "../assets/company/wiara_daas.jpeg";
import mui from "../assets/tech/mui.jpeg";
export const navLinks = [
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "feedbacks",
    title: "Recommendation Letters",
  },
  {
    id: "contact",
    title: "Contact me",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    label: "React",
  },
  {
    name: "TypeScript",
    icon: typescript,
    label: "TypeScript",
  },
  {
    name: "JavaScript",
    icon: javascript,
    label: "JavaScript",
  },
  {
    name: "HTML 5",
    icon: html,
    label: "HTML",
  },
  {
    name: "CSS 3",
    icon: css,
    label: "CSS",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    label: "Redux Toolkit",
  },
  {
    name: "Material UI",
    icon: mui,
    label: "Material UI",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    label: "Tailwind CSS",
  },
  {
    name: "Three JS",
    icon: threejs,
    label: "Three JS",
  },
  {
    name: "git",
    icon: git,
    label: "Git",
  },
  {
    name: "figma",
    icon: figma,
    label: "Figma",
  },
];

const experiences = [
  {
    title: "Mid Frontend Developer",
    company_name: "WIARA DAAS",
    icon: wiara,
    iconBg: "#fff",
    date: "September 2025 - Present",
    points: [
      "Served as the main frontend contributor, extending and refining the design system with React, TypeScript, Redux Toolkit, and MUI.",
      "Delivered features with React Hook Form + Yup, and integrated real-time communication using Socket.IO.",
      "Collaborated with designers and clients, earning positive feedback for reliable, on-time delivery.",
      "Took initiative in managing Jira workflows and gained hands-on backend exposure with Express.js.",
      "Adapted quickly across diverse projects with different structures and tech stacks.",
    ],
  },
  {
    title: "React Frontend Developer",
    company_name: "ThinkMarkets",
    icon: thinkmarkets,
    iconBg: "#fff",
    date: "May 2022 - September 2023",
    points: [
      "Developed significant and complex features for a trading platform.",
      "Developed critical and intricate features for the platform in a high-paced environment.",
      "Engaged in rigorous collaboration with team members to uphold standards of code quality, including active participation in code review processes.",
      "Facilitated close collaboration with the design team, actively contributing insights and recommendations to enhance the overall design of newly developed features.",
      "Led the successful development and implementation of two key features within the application.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "IBA",
    icon: iba,
    iconBg: "#0065b1",
    date: "June 2021 - May 2022",
    points: [
      "Coached and mentored junior team members to ensure their success.",
      "Developed and maintained frontend applications",
      "Collaborated closely with cross-functional teams to gather requirements, communicate effectively, and contribute to the design and architecture of the application.",
    ],
  },
  {
    title: "Bachelor Degree in Software Engineering",
    company_name: "Burgas Free University",
    icon: bsu,
    iconBg: "#fff",
    date: "2016 - 2020",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm extremely pleased with Bogdana's work and want to take a moment to recognize her achievements and the impact shes had on our projects. From the very beginning, she stood out not only with solid technical skills but also with a proactive attitude and a genuine commitment to making processes and outcomes better for everyone involved. She consistently shares her perspective when it matters, asks the right questions, and doesn't shy away from taking initiative when something needs to move forward. Colleagues appreciate her support and collaboration, and clients are equally impressed by the quality and consistency of her work. Her communication skills are excellent, which makes collaboration smooth and productive, even in challenging situations. On the technical side, her code is clean, reliable, and thoughtfully structured. She approaches tasks with ownership, pays attention to detail, and looks for ways to improve things rather than just “get them done.” It's clear that she takes her work seriously, but also with the right balance of curiosity and openness to learning. What I value most is that Bogdana doesn't just focus on her own tasks, she has a broader perspective on the entire process. Whether it's suggesting improvements, supporting teammates, or stepping up when leadership is needed, she shows qualities that are rare to find. I'm genuinely glad to have the opportunity to work with her, and I look forward to seeing her grow further. With her mindset and dedication, I have no doubt she'll reach senior level and beyond.",
    name: "Stefan Dyankov",
    linkedin: "https://www.linkedin.com/in/dyankov91/",
    designation: " Founder @WIARA | Senior Frontend Developer",
    company: "WIARA DAAS",
  },
  {
    testimonial:
      "I'm excited to recommend Bogdana as a front-end developer. I've had the privilege of working alongside her and have been consistently impressed with her talents.Bogdana's attention to detail is unmatched, and her creative approach to problem-solving is truly refreshing. She consistently delivers top-notch code and is always open to new challenges. Her adaptability and ability to keep up with industry trends make her a valuable asset to any team.Bogdana's collaborative spirit and excellent communication skills make her a pleasure to work with. I have no doubt that she will continue to excel and make a positive impact wherever she goes.If you're looking for a dedicated and creative React developer, Bogdana is the right choice.Feel free to reach out to me if you have any questions.",
    name: "Panayot Stoyanov",
    linkedin: "https://www.linkedin.com/in/panayotstoyanov/",
    designation: "Senior Product Designer",
    company: "ThinkMarkets",
  },
  {
    testimonial: `Focused on writing quality code and following good practices, Bogdana persists daily to get the job "well done" instead of just "done". Always seeking to learn more IT skills from any source like tutorials, documentation, and colleagues and patiently doing hard developer tasks, she has that sort of passion for frontend development that outputs good-looking UIs and solid software features.`,
    name: "Nikolai Bakardjiev",
    linkedin: "https://www.linkedin.com/in/nikolai-bakardjiev-73350852/",
    designation: "Senior Frontend Developer",
    company: "ThinkMarkets",
  },
  {
    testimonial:
      "Bogdana is a wonderful Developer and I have admired her since I have known her. She has excellent ideas and gives great solutions to problems. Working with her is very easy and communication is at a high level. She always strives for perfectionism.",
    name: "Emil Petrov",
    linkedin: "https://www.linkedin.com/in/emilzdravkovpetrov/",
    designation: "Software Test Engineer",
    company: "Dormakaba",
  },
];

const projects = [
  {
    name: "WIP: Pixel Perfect",
    description: "Web-based platform for drawing pixel art",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "CSS Modules",
        color: "orange-text-gradient",
      },

      {
        name: "Ant Design",
        color: "orange-text-gradient",
      },
      {
        name: "Fontawesome",
        color: "orange-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/zzergy/pixel-perfect",
    projectLink: "https://zzergy.github.io/pixel-perfect/",
  },
  {
    name: "Yummy",
    description:
      "Web application where users can create and publish and comment on cooking recipes",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Material UI",
        color: "orange-text-gradient",
      },
      {
        name: "Notistack",
        color: "orange-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/zzergy/Yummy",
    projectLink: "https://zzergy.github.io/Yummy/#/",
  },
  {
    name: "Noted",
    description: "A simple platform for taking notes",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/zzergy/Noted",
    projectLink: "https://zzergy.github.io/Noted/#/",
  },
  {
    name: "Otaku Fanart",
    description:
      "An easy and fun way to browse and socialize with others by the one and only true passion, the anime world.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Material UI",
        color: "orange-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/zzergy/Otaku-Fanart",
    projectLink: null,
  },
];

export { technologies, experiences, testimonials, projects };
