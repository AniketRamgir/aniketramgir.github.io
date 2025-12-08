
import { Project, Certificate, Skill } from './types';
import { PROJECT_IMAGES, CREDENTIAL_IMAGES } from './assets/images';

export const PROFILE = {
  name: "Aniket Ramgir",
  title: "Data Analyst",
  bio: "Proficient Data Analyst having Excellent skills in Data Analysis, Reporting & Business Intelligence and Educational background in Computer Engineering (B.E). Expertise in Power BI, SQL, Python and Advanced Excel. Skilled at extracting insights, developing interactive dashboards and Reports. Passionate about leveraging data to solve complex problems and contribute to business growth.",
  location: "Pune, India",
  email: "aniket15ramgir@gmail.com",
  socials: {
    github: "https://github.com/AniketRamgir/aniketramgir.github.io",
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
    title: "E-Commerce Sales Data Analysis using Power BI",
    description: "Developed an end-to-end Power BI analytics solution with a star schema, advanced DAX, forecasting, and RLS for streamlined sales and profit reporting.",
    tags: ["Power BI", "DAX", "Data Modeling", "Forecasting"],
    imageUrl: PROJECT_IMAGES.project1,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/Power%20BI%20Projects/E-Commerce"
  },
  {
    id: "2",
    title: "Sports Apparel Customer Behavior Analysis using SQL",
    description: "Worked with a large MySQL e-commerce database to prepare high-quality data and develop analytical SQL queries that revealed key trends in products, customers, and returns.",
    tags: ["SQL", "MySQL", "Data Analysis", "E-commerce"],
    imageUrl: PROJECT_IMAGES.project2,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/SQL%20Projects/Decathlon%20Online%20Ecommerce%20Sports%20SQL%20Data%20Analysis"
  },
  {
    id: "3",
    title: "Bank Customer Segmentation RFM and Loan Risk Analysis",
    description: "Developed a Power BI analytics solution with a star schema, advanced DAX, and segmentation dashboards to uncover customer patterns and loan risk insights for strategic decision-making.",
    tags: ["Power BI", "RFM Analysis", "Risk Assessment", "Banking"],
    imageUrl: PROJECT_IMAGES.project3,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/Power%20BI%20Projects/Banking"
  },
  {
    id: "4",
    title: "Walmart Store Inventory Tracker Dashboard Using Advanced Excel",
    description: "Built an advanced Excel inventory dashboard using PivotTables, Power Query, KPIs, and conditional formatting to track stock levels and highlight low-inventory items.",
    tags: ["Advanced Excel", "Power Query", "PivotTables", "KPIs"],
    imageUrl: PROJECT_IMAGES.project4,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/Advanced%20Excel%20Projects"
  }
];

export const CERTIFICATES: Certificate[] = [
  // --- SECTION 1: BADGES ---
  {
    id: "b1",
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.badge,
    credentialUrl: "https://www.credly.com/badges/4f0c9cde-29b7-4cf2-89af-e81f4e952ad4/public_url",
    category: "badge"
  },

  // --- SECTION 2: CERTIFICATES ---
  {
    id: "c1",
    title: "Excel Skills for Business",
    issuer: "OneRoadmap",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.certificate,
    credentialUrl: "https://oneroadmap.io/skills/excel/certificate/CERT-ED808D06",
    category: "certificate"
  },
  {
    id: "c2",
    title: "SQL and Relational Databases 101",
    issuer: "IBM",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.certificate,
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/fce04ccbc0f1441d8524c1b9648a57f5",
    category: "certificate"
  },
  {
    id: "c3",
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.certificate,
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/38f79099d2564499a5e4055196e81a48",
    category: "certificate"
  },

  // --- SECTION 3: TRAININGS ---
  {
    id: "t1",
    title: "SQL for Data Science",
    issuer: "Simplilearn",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.training,
    credentialUrl: "https://simpli-web.app.link/e/OG8R3zSHVYb",
    category: "training"
  },
  {
    id: "t2",
    title: "Business Intelligence using Excel Basics Tutorial",
    issuer: "Simplilearn",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.training,
    credentialUrl: "https://simpli-web.app.link/e/upI2rNItPYb",
    category: "training"
  },
  {
    id: "t3",
    title: "Python Libraries for Data Science",
    issuer: "Simplilearn",
    date: "2023",
    imageUrl: CREDENTIAL_IMAGES.training,
    credentialUrl: "https://simpli-web.app.link/e/3xoBLFG7TYb",
    category: "training"
  }
];
