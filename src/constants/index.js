import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate frontend developer dedicated to creating responsive and visually appealing web applications. Proficient in HTML, CSS, and JavaScript, I specialize in using modern frameworks and tools like React, React Native, Bootstrap, Tailwind CSS, and Next.js. My focus is on crafting seamless user experiences and writing clean, efficient code, while constantly learning and staying updated with the latest trends in web development.`;

export const ABOUT_TEXT = `I am a motivated and adaptable frontend developer with a passion for crafting modern, responsive, and user-centric web applications. Specializing in technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, and Next.js, I aim to create seamless digital experiences through clean design and efficient coding. My journey into frontend development is fueled by a constant desire to learn, explore, and push the boundaries of creativity in the web space. I thrive on tackling challenges, collaborating with teams, and staying up-to-date with the latest advancements in web technologies. Beyond coding, I enjoy experimenting with new tools, expanding my skill set, and contributing to the growing tech community.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "AI Trainer Coding Expertise",
    company: "Outlier | Freelance ",
    description: `Enhanced and optimized AI model coding responses to ensure higher accuracy, technical relevance, and user engagement, focusing on improving code quality, debugging support, and overall developer experience.`,
    technologies: ["Javascript", "HTML", "CSS"],
  },
  {
    year: "Sep 2024 - Feb 2025",
    role: "Frontend Developer",
    company: "Route Academy | Internship",
    description: `Built responsive websites using HTML, CSS, JavaScript, and frameworks like Bootstrap, Tailwind, and React.js, ensuring cross-platform compatibility. Proficient in version control with Git and GitHub for efficient project management and collaboration, and skilled in using Figma to translate UI/UX designs into functional and visually appealing front-end components.`,
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "Javascript",
      "React.js",
      "Next.js",
    ],
  },
  {
    year: "Jan 2021 - Mar 2023",
    role: "AI Annotator",
    company: "Remotasks | Freelance ",
    description: `Annotated complex AI datasets, including image segmentation, text classification, and entity recognition, to ensure precise machine learning inputs, while reviewing and debugging datasets to identify inconsistencies and enhance model accuracy.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A fully responsive personal portfolio website built with React, Tailwind CSS, and JavaScript. It features a modern design to showcase projects, skills, and contact information, offering a seamless user experience across all devices.",
    technologies: ["React", "Tailwaind", "JavaScript", "React-Icons", "CSS"],
    url: "#",
  },
  {
    title: "Simple CRUD system",
    image: project2,
    description:
      "Simple CRUD (Create, Read, Update, Delete) system implemented using HTML, CSS, JavaScript, Bootstrap.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrab"],
    url: "https://basel-mohamed.github.io/Simple-crud-system/",
  },
  {
    title: "Daniels Website",
    image: project3,
    description:
      "A responsive personal portfolio website built with HTML, CSS, and Bootstrap, based on a Figma design, showcasing skills in converting designs into functional web interfaces.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    url: "https://basel-mohamed.github.io/Daniels-Website/",
  },
  {
    title: "Bakery Website",
    image: project4,
    description:
      "My first project: a bakery website built using HTML and CSS, designed specifically for large screens. It features a clean layout to showcase bakery products, menus, and contact details.",
    technologies: ["HTML", "CSS"],
    url: "https://basel-mohamed.github.io/Bakery-Website/",
  },
];

export const CONTACT = {
  address: "Maadi, Cairo, Egypt ",
  phoneNo: "+201007337686",
  email: "baselmohamed937@gmail.com",
};
