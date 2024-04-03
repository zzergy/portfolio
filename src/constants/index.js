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
    bsu
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
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    }
];

const experiences = [
    {
        title: "React Frontend Developer",
        company_name: "ThinkMakrets",
        icon: thinkmarkets,
        iconBg: "#fff",
        date: "May 2022 - September 2023",
        points: [
            'Developed significant and complex features for a trading platform.',
            'Developed critical and intricate features for the platform in a high-paced environment.',
            'Engaged in rigorous collaboration with team members to uphold standards of code quality, including active participation in code review processes.',
            'Facilitated close collaboration with the design team, actively contributing insights and recommendations to enhance the overall design of newly developed features.',
            'Led the successful development and implementation of two key features within the application.'
        ],
    },
    {
        title: "Junior Frontend Developer",
        company_name: "IBA",
        icon: iba,
        iconBg: "#0065b1",
        date: "June 2021 - May 2022",
        points: [
            'Coached and mentored junior team members to ensure their success.',
            'Developed and maintained frontend applications',
            'Collaborated closely with cross-functional teams to gather requirements, communicate effectively, and contribute to the design and architecture of the application.'
        ],
    },
    {
        title: "Bachelor Degree in Software Engineering",
        company_name: "Burgas Free University",
        icon: bsu,
        iconBg: "#fff",
        date: "2016 - 2020",
        points: [],
    }
];

const testimonials = [
    {
        testimonial:
            "I'm excited to recommend Bogdana as a front-end developer. I've had the privilege of working alongside her and have been consistently impressed with her talents.Bogdana's attention to detail is unmatched, and her creative approach to problem-solving is truly refreshing. She consistently delivers top-notch code and is always open to new challenges. Her adaptability and ability to keep up with industry trends make her a valuable asset to any team.Bogdana's collaborative spirit and excellent communication skills make her a pleasure to work with. I have no doubt that she will continue to excel and make a positive impact wherever she goes.If you're looking for a dedicated and creative React developer, Bogdana is the right choice.Feel free to reach out to me if you have any questions.",
        name: "Panayot Stoyanov",
        designation: "Senior Product Designer",
        company: "ThinkMarkets",
    },
    {
        testimonial: `Focused on writing quality code and following good practices, Bogdana persists daily to get the job "well done" instead of just "done". Always seeking to learn more IT skills from any source like tutorials, documentation, and colleagues and patiently doing hard developer tasks, she has that sort of passion for frontend development that outputs good-looking UIs and solid software features.`,
        name: "Nikolai Bakardjiev",
        designation: "Senior Frontend Developer",
        company: "ThinkMarkets"
    },
    {
        testimonial:
            "Bogdana is a wonderful Developer and I have admired her since I have known her. She has excellent ideas and gives great solutions to problems. Working with her is very easy and communication is at a high level. She always strives for perfectionism.",
        name: "Emil Petrov",
        designation: "Software Test Engineer",
        company: "Dormakaba",
    },

];

const projects = [
    {
        name: "Pixel Perfect",
        description:
            "Web-based platform for drawing pixel art",
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
        source_code_link: "https://zzergy.github.io/pixel-perfect/",
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
        source_code_link: "https://zzergy.github.io/Yummy/#/",
    },
    {
        name: "Noted",
        description:
            "A simple platform for taking notes",
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
        source_code_link: "https://github.com/",
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
        source_code_link: "https://github.com/",
    },

];

export { technologies, experiences, testimonials, projects };