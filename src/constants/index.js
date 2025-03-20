import {
    mkcg
} from "../assets/images";
import {
    contact,
    cpp,
    csharp,
    gamepad,
    git,
    github,
    linkedin,
    unityengine,
    unrealengine,
    pegsolitaire

} from "../assets/icons";

export const skills = [
    /* TEMPLATE
    {
        imageUrl: skill logo name, // add image in assets/icons and update the index there
        name: "skill name",
        type: "skill description",
    },
    */
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gamepad,
        name: "Game Design",
        type: "Designing",
    },
    {
        imageUrl: unityengine,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: unrealengine,
        name: "Unreal",
        type: "Game Engine",
    },
];

export const experiences = [
    /* TEMPLATE
    {
    * title: "job title",
        company_name: "name of the company you worked for",
        icon: logo of the company, // Make sure to add it in assets/images and update the index.jsx there
        iconBg: "Complementary icon color hex code",
        date: "start date - end date",
        points: [
            "job responsibility 1",
            "job responsibility 2",
            "job responsibility 3",
            "job responsibility 4"
        ],
    }
    * */
    {
        title: "Data Entry Operator",
        company_name: "MKCG Medical College and Hospital",
        icon: mkcg,
        iconBg: "#bdab7b",
        date: "2019 - 2023",
        points: [
            "Responsible for maintaining and updating student databases for over 50,000 students and staffs.",
            "Increased the responsiveness by 60% Updated and downloaded medical journals.",
            "Maintained book database of over 60,000+ books.",
            "Updated and maintained the user database of Up-to-Date app. 100% of the data were correct.",
            "Maintained and oversaw a computer laboratory with over 30 computers."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/definetlynotdp',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/debasish-padhiary-12416b339/',
    }
];

export const projects = [
    /* TEMPLATE
    {
        iconUrl: icon name, //  Make sure to add it in assets/icons and update the index.jsx there
        theme: 'button theme',
        name: 'Project Name',
        description: 'Project Description',
        link: 'Link to project',
    },
    */
    {
        iconUrl: pegsolitaire, //  Make sure to add it in assets/icons and update the index.jsx there
        theme: 'btn-back-blue',
        name: 'Peg Solitaire',
        description: 'Peg Solitaire is a trial of wit and foresight—leap over pegs to clear the board, leaving only one standing. A quiet challenge, where patience and strategy forge victory.',
        link: 'https://flint-chan.itch.io/peg-solitaire',
    }
];