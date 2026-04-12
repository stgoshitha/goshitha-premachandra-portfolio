// Importing images
import webIcon from './assets/web.jpg';
import graphicIcon from './assets/graphic.png';
import sliitIcon from './assets/sliit.png';
import esoftIcon from './assets/esoft.png';
import psdAcademyIcon from './assets/psdAcademy.jpg';
import schoolLogoIcon from './assets/school_Logo.jpg';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import javascriptIcon from './assets/javascript.png';
import reactjsIcon from './assets/reactjs.png';
import tailwindIcon from './assets/tailwind.png';
import phpIcon from './assets/php.png';
import nodejsIcon from './assets/nodejs.png';
import expressIcon from './assets/express.png';
import mysqlIcon from './assets/mysql.png';
import mongodbIcon from './assets/mongodb.png';
import javaIcon from './assets/java.png';
import pythonIcon from './assets/python.png';
import gitIcon from './assets/git.png';
import vscodeIcon from './assets/vscode.png';
import postmanIcon from './assets/postman.svg';
import figmaIcon from './assets/figma.png';
import adobeIllustratorIcon from './assets/adobeIllustrator.png';
import photoshopIcon from './assets/photoshop.png';
import freshFruitsIcon from './assets/freshFruits.png';
import logoDesign01Icon from './assets/logoDesign01.png';
import classPoster01Icon from './assets/classPoster01.png';
import classPoster02Icon from './assets/classPoster02.png';
import tuteCover02Icon from './assets/Tute-Trigonometry02.png';
import tuteCover01Icon from './assets/Tute-Trigonometry.png';
import projectilesIcon from './assets/Projectiles.png';
import visitingCard01Icon from './assets/visitingCard01.png';
import certificate01Icon from './assets/Certificate01.png';
import SnakebiteAssist from './assets/Snakebite-Assist.png';
import SkillFlow from './assets/skill_flow.png';
import classPoster03Icon from './assets/classPoster03.png';
import banner01Icon from './assets/banner01.png';
import classPoster04Icon from './assets/classPoster04.png';
import banner02Icon from './assets/banner02.png';
import authenticationJWT from './assets/authentication_JWT.png';
import typescript from './assets/typescript.png';
import dockerIcon from './assets/docker.png';
import gamageIcon from './assets/gamage.jpg';

// Hero section content
const heroContent = {
  name: "Goshitha",
  description1 : "A Software Engineer who creates user-friendly",
  description2 : "interfaces and web applications.",
  linkedin : "https://www.linkedin.com/in/goshitha-premachandra",
  github : "https://github.com/stgoshitha",
  facebook : "https://web.facebook.com/goshitha.premachandra.3"
}

// About section content
const aboutContent = {
  topic : "About Me",
  aboutMe: "Motivated and collaborative full-stack developer with a strong focus on backend technologies and critical thinking. Currently a fourth-year student at SLIIT, I possess expertise in JavaScript and the MERN stack, along with proficiency in HTML, CSS, and Tailwind CSS. Experienced in version control and adept at fostering teamwork in friendly, cooperative environments. Passionate about building robust backend systems while contributing innovative frontend ideas to create seamless digital solutions. Eager to bring technical and creative skills to dynamic and impactful projects."
};

// Services content in about section
const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern technologies.",
    icon: webIcon,
  },
  {
    title: "Graphic Design",
    description: "Creating visually appealing designs, including logos, branding, and marketing materials.",
    icon: graphicIcon,
  },
];


// Work Experience section content
const workExperienceContent = {
  topic: "Work Experience",
};

const workExperienceHistory = [
  {
    date: "December 2025 - Present",
    title: "Software Engineering Intern",
    company_name: "Gamage Company (Pvt) Ltd",
    icon: gamageIcon, // you can add company logo later if needed
    iconBg: "#ffffff",
    points: [
  "Designing and developing backend services using Spring Boot with a focus on scalable RESTful APIs.",
  "Implementing authentication, authorization, and business logic for full-stack applications.",
  "Containerizing applications using Docker for consistent development and deployment environments.",
  "Integrating Supabase for authentication, database management, and real-time features.",
  "Collaborating with frontend teams and following Agile methodology to deliver production-ready features."
]
  }
];

// Education section content
const educationContent = {
  topic: "Education",
}
const educationHistory = [
  {
    date: "2022 - Present",
    title: "Bachelor's in Information Technology",
    institution_name: "Sri Lanka Institute of Information Technology (SLIIT)",
    icon: sliitIcon,
    iconBg: "#ffffff",
    points: [
      "Currently pursuing a degree in IT",
      "Specialized in Information Technology",
      "Engaged in academic and practical projects.",
      "Relevant Coursework : Object oriented Concept, Object oriented programming, Data Structure and Algorithm, Internet and Web Technologies, IT Project Management"
    ],
  },
  {
    date: "March 2022 - May 2025",
    title: "Diploma of Education, Information Technology - (DiTEC)",
    institution_name: "ESOFT Metro Campus Gampaha",
    icon: esoftIcon,
    iconBg: "#ffffff",
    points: [
      "Gained a solid foundation in IT concepts and practical skills.",
      "Relevant Coursework : MS Office, Web Design, Hardware, Networking, Python, C#, SQL, Graphics, and Software Engineering.",
    ],
  },
  {
    date: "Dec 2023",
    title: "Graphic design Illustrator Course",
    institution_name: "PSD Academy",
    icon: psdAcademyIcon,
    iconBg: "#ffffff",
    points: [
      "Learned essential graphic design principles and techniques.",
      "Gained hands-on experience with Adobe Illustrator tools.",
      "Created vector-based designs, logos, and illustrations."
    ],
  },
  {
    date: "2018 - 2022",
    title: "Advanced Level",
    institution_name: "Thakshila College Gampaha",
    icon: schoolLogoIcon,
    iconBg: "#ffffff",
    points: [
      "Physical science stream.",
      "Subjects: Physics (C), Chemistry (C), Combined Mathematics (C).",
    ],
  },
];

// Skills section content
const skillsData = {
  'Front-end': [
    { name: 'HTML', img: htmlIcon },
    { name: 'CSS', img: cssIcon },
    { name: 'JavaScript', img: javascriptIcon },
    { name: 'React', img: reactjsIcon },
    { name: 'Tailwind CSS', img: tailwindIcon },
  ],
  'Back-end & Database': [
    { name: 'Node.js', img: nodejsIcon },
    { name: 'Express.js', img: expressIcon },
    { name: 'MySQL', img: mysqlIcon },
    { name: 'MongoDB', img: mongodbIcon },
  ],
  'Languages': [
    { name: 'JavaScript', img: javascriptIcon },
    { name: 'Java', img: javaIcon },
    { name: 'Python', img: pythonIcon },
    { name: 'TypeScript', img: typescript },
  ],
  'Other': [
    { name: 'Git', img: gitIcon },
    { name: 'VS Code', img: vscodeIcon },
    { name: 'Postman', img: postmanIcon },
    { name: 'Figma', img: figmaIcon },
    { name: 'Illustrator', img: adobeIllustratorIcon },
    { name: 'Photoshop', img: photoshopIcon },
    { name: 'Docker', img: dockerIcon },
  ],
};

// Projects section content
const projectData = {
  'Software Engineering': [
    {
      title: 'Fresh4You Fruit Management System',
      description: 'Y2S2 campus project - Developed a MERN Stack web app for fruit shop with stock management, dashboard, and reports, using Tailwind CSS, Material UI, Figma, and GitHub for version control.',
      screenshot: freshFruitsIcon,
      github01: 'https://github.com/stgoshitha/Fresh4You-Shop-Managment-System.git',
      time: 'Feb 2024 - June 2024',
      technologies: ['React','ExpressJs', 'NodeJs', 'Mongodb','TailwindCSS','gitHub'],
    },
    {
      title: 'MERN_User_Authentication',
      description: 'The MERN User Authentication project is a secure web app using MongoDB, Express.js, React, and Node.js with JWT for authentication and authorization. It includes signup, login, protected routes, and role-based access control, providing a strong foundation for secure user management in larger applications.',
      screenshot: authenticationJWT,
      github01: 'https://github.com/stgoshitha/MERN_User_Authentication_Frontend.git',
      github02: 'https://github.com/stgoshitha/MERN_User_Authentication_Backend.git',
      time: 'Aug  2024 - Sep   2024',
      technologies: ['React','ExpressJs', 'NodeJs', 'Mongodb','TailwindCSS','JWT'],
    },
    {
      title: 'Snakebite-Assist',
      description: 'Snakebite Assist addresses these critical issues by leveraging modern technologies like voice search, real-time hospital suggestions, and a user-driven blog system. The platform aims to be a lifesaving tool in emergencies and an educational platform for snake awareness.',
      screenshot: SnakebiteAssist,
      github01: 'https://github.com/stgoshitha/Snakebite-Assist.git',
      time: 'Mar 2025 - May  2025',
      technologies: ['React','ExpressJs', 'NodeJs', 'Mongodb','TailwindCSS','gitHub'],
    },
    {
      title: 'Skill-Flow',
      description: 'Skill-Flow is a collaborative learning platform that helps users develop and share skills through structured learning plans, knowledge sharing, and community support. Built with React, Spring Boot, and MySQL, it features OAuth2 authentication and Spring Security for a secure and personalized experience.',
      screenshot: SkillFlow,
      github01: 'https://github.com/stgoshitha/Snakebite-Assist.git',
      github02: 'https://github.com/udithjeewapadma/Skill-Flow.git',
      time: 'April 2025 - May  2025',
      technologies: ['React','SpringBoot', 'MySQL','TailwindCSS','OAuth2','SpringSecurity','gitHub','Docker'],
    }
  ],
  'Graphic Design': [
    { title: 'Logo design', screenshot: logoDesign01Icon },
    { title: 'Class poster', screenshot: classPoster01Icon },
    { title: 'Class Poster', screenshot: classPoster02Icon },
    { title: 'Tute Cover 01', screenshot: tuteCover01Icon },
    { title: 'Tute Cover 02', screenshot: tuteCover02Icon },
    { title: 'Tute Cover 03', screenshot: projectilesIcon },
    { title: 'Visiting Card', screenshot: visitingCard01Icon },
    { title: 'Certificate Design', screenshot: certificate01Icon },
    { title: 'Class poster', screenshot: classPoster03Icon },
    { title: 'Youtube Banner', screenshot: banner01Icon },
    { title: 'Class poster', screenshot: classPoster04Icon },
    { title: 'Youtube Banner', screenshot: banner02Icon },
  ],
};

// Contact section content
const contactContent = {
  description: "Whether you have a question, want to work together, or just want to say hi, feel free to drop a message. I look forward to hearing from you!",
  email: "wkgoshithapremachandra@gamil.com",
  phone: "+94 76 4220 965"
};

// Footer content
const footerContent = {
  copyrightText: "© 2026 Goshitha Premachandra. All rights reserved."
};

export { 
  footerContent,
  contactContent,
  aboutContent,
  services,
  educationHistory,
  educationContent,
  heroContent,
  skillsData,
  projectData,
  workExperienceHistory,
  workExperienceContent
};
