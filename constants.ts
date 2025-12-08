
import { Project, Certificate, Skill } from './types';
import { PROJECT_IMAGES, CREDENTIAL_IMAGES } from './assets/images';

export const PROFILE = {
  name: "Aniket Ramgir",
  title: "Data Analyst",
  bio: "Proficient Data Analyst having Excellent skills in Data Analysis, Reporting & Business Intelligence and Educational background in Computer Engineering (B.E). Expertise in Power BI, SQL, Python and Advanced Excel. Skilled at extracting insights, developing interactive dashboards and Reports. Passionate about leveraging data to solve complex problems and contribute to business growth.",
  location: "Pune, India",
  email: "aniket15ramgir@gmail.com",
  socials: {
    github: "https://github.com/AniketRamgir",
    linkedin: "https://linkedin.com/in/ankitramgir",
    twitter: "https://twitter.com"
  }
};

export const SKILLS: Skill[] = [
  { name: "Data Analysis", level: 95, category: "Core" },
  { name: "Power BI", level: 95, category: "BI Tools" },
  { name: "SQL", level: 90, category: "Database" },
  { name: "Python", level: 85, category: "Programming" },
  { name: "Advanced Excel", level: 90, category: "Tools" },
  { name: "Business Intelligence", level: 85, category: "Core" },
  { name: "Reporting", level: 90, category: "Core" },
  { name: "Dashboarding", level: 95, category: "Visualization" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Sales Data Analysis using Power BI",
    description: "Developed an end-to-end Power BI analytics solution with a star schema, advanced DAX, forecasting, and RLS for streamlined sales and profit reporting.",
    tags: ["Power BI", "DAX", "Data Modeling", "Forecasting"],
    imageUrl: PROJECT_IMAGES.project1,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/Power%20BI%20Projects/E-Commerce"
  },
  {
    id: "2",
    title: "Sportswear Customer Behavior Analysis using SQL",
    description: "Worked with a large MySQL e-commerce database to prepare high-quality data and develop analytical SQL queries that revealed key trends in products, customers, and returns.",
    tags: ["SQL", "MySQL", "Data Analysis", "E-commerce"],
    imageUrl: PROJECT_IMAGES.project2,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/SQL%20Projects"
  },
  {
    id: "3",
    title: "Bank Customer Segmentation and Loan Risk",
    description: "Analyzed customer data to identify segmentation clusters and assess loan risk factors using Python libraries and statistical methods.",
    tags: ["Python", "Pandas", "Scikit-learn", "Financial Analysis"],
    imageUrl: PROJECT_IMAGES.project3,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io"
  },
  {
    id: "4",
    title: "Walmart Store Inventory Tracker",
    description: "Created a comprehensive Excel-based inventory tracking system to monitor stock levels, predict shortages, and optimize supply chain operations.",
    tags: ["Advanced Excel", "VBA", "Dashboard", "Inventory Management"],
    imageUrl: PROJECT_IMAGES.project4,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io"
  }
];

export const CERTIFICATES: Certificate[] = [
  // --- BADGES ---
  {
    id: "b1",
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://www.credly.com/badges/4f0c9cde-29b7-4cf2-89af-e81f4e952ad4/public_url",
    category: "badge"
  },

  // --- CERTIFICATES ---
  {
    id: "c1",
    title: "SQL and Relational Databases 101",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://oneroadmap.io/skills/excel/certificate/CERT-ED808D06",
    category: "certificate"
  },
  {
    id: "c2",
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/fce04ccbc0f1441d8524c1b9648a57f5",
    category: "certificate"
  },
  {
    id: "c3",
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/38f79099d2564499a5e4055196e81a48",
    category: "certificate"
  },

  // --- TRAININGS ---
  {
    id: "t0",
    title: "Power BI - Business Intelligence for Beginners to Advance",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "https://www.udemy.com/certificate/UC-1d34b2de-d083-4bee-ab6b-d90e3997f2a8/",
    category: "training"
  },
  {
    id: "t1",
    title: "SQL for Data Science",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/OG8R3zSHVYb",
    category: "training"
  },
  {
    id: "t2",
    title: "Business Intelligence using Excel Basics Tutorial",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/upI2rNItPYb",
    category: "training"
  },
  {
    id: "t3",
    title: "Python Libraries for Data Science",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/3xoBLFG7TYb",
    category: "training"
  },
  {
    id: "t4",
    title: "Machine Learning using Python",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/RSv7pHmATYb",
    category: "training"
  },
  {
    id: "t5",
    title: "Excel Dashboard for Beginners",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/8LMLV6wtPYb",
    category: "training"
  },
  {
    id: "t6",
    title: "Programming with Python 3.X",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/V2Fq5zdATYb",
    category: "training"
  },
  {
    id: "t7",
    title: "Python for Data Analysis",
    issuer: "Simplilearn",
    date: "2023",
    credentialUrl: "https://simpli-web.app.link/e/F0Q1CxhATYb",
    category: "training"
  },
  {
    id: "t8",
    title: "Data Analysis using Excel",
    issuer: "UpGrad",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/1rDpibcJL8Q_fg0tzqQ-3ofup8GpKxSt8/view?usp=sharing",
    category: "training"
  },
  {
    id: "t9",
    title: "Gen AI Mastermind",
    issuer: "Outskill",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/13we4UVa0lmEJObzI8650MDzmHc0Gf_rW/view?usp=sharing",
    category: "training"
  }
];
