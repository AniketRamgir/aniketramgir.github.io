
import { Project, Certificate, Skill } from './types';
import { PROJECT_IMAGES, CREDENTIAL_IMAGES } from './assets/images';

// --- HELPER FUNCTION FOR GOOGLE DRIVE IMAGES ---
// You can now just paste your standard Google Drive "Share" link here.
// Example: "https://drive.google.com/file/d/19NS8IIgGEvxAjpvoHqwc4BDW58GTWZX5/view?usp=sharing"
const driveImage = (urlOrId: string): string => {
  if (!urlOrId) return "";
  // If the user pasted a full URL, extract the ID
  const idMatch = urlOrId.match(/[-\w]{25,}/);
  const id = idMatch ? idMatch[0] : urlOrId;
  // Return the high-performance Google direct image URL
  return `https://lh3.googleusercontent.com/d/${id}`;
};

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
    title: "Sportswear Brand Customer Behavior Analysis using SQL",
    description: "Worked with a large MySQL e-commerce database to prepare high-quality data and develop analytical SQL queries that revealed key trends in products, customers, and returns.",
    tags: ["SQL", "MySQL", "Data Analysis", "E-commerce"],
    imageUrl: PROJECT_IMAGES.project2,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io/tree/main/Projects/SQL%20Projects"
  },
  {
    id: "3",
    title: "Bank Customer Segmentation and Loan Risk",
    description: "Analyzed customer data to identify segmentation clusters and assess loan risk factors.",
    tags: ["Python", "Pandas", "Scikit-learn", "Financial Analysis"],
    imageUrl: PROJECT_IMAGES.project3,
    githubUrl: "https://github.com/AniketRamgir/aniketramgir.github.io"
  },
  {
    id: "4",
    title: "Walmart Store Inventory Tracker Dashboard",
    description: "Created a comprehensive Excel-based inventory tracking system to monitor stock levels, predict shortages, and optimize supply chain operations.",
    tags: ["Advanced Excel", "charts", "Dashboard", "Inventory Management"],
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
    date: "2025",
    credentialUrl: "https://www.credly.com/badges/4f0c9cde-29b7-4cf2-89af-e81f4e952ad4/public_url",
    category: "badge",
    // You can now paste the full Google Drive link inside driveImage()
    imageUrl: driveImage("https://drive.google.com/file/d/1vuXeNtdkD2UamMyjIURUbZkBiGgzKhAK/view?usp=sharing")
  },
  {
    id: "b2",
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "", // Add verification link
    category: "badge",
    imageUrl: driveImage("") // Paste Google Drive link here
  },

  // --- CERTIFICATES ---
  {
    id: "c1",
    title: "Advanced Excel Certification",
    issuer: "OneRoadmap",
    date: "2023",
    credentialUrl: "https://oneroadmap.io/skills/excel/certificate/CERT-ED808D06",
    category: "certificate",
    imageUrl: driveImage("https://drive.google.com/file/d/1_pEV-bxLvAK-VFabMEzAGupIMBeI8TNm/view?usp=sharing") 
  },
  {
    id: "c2",
    title: "SQL and Relational Databases 101",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/fce04ccbc0f1441d8524c1b9648a57f5",
    category: "certificate",
    imageUrl: driveImage("https://drive.google.com/file/d/1HX2XiyRkSR4rJyr17vZK_KFokYQY4OKy/view?usp=sharing")
  },
  {
    id: "c3",
    title: "Python 101 for Data Science",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/38f79099d2564499a5e4055196e81a48",
    category: "certificate",
    imageUrl: driveImage("https://drive.google.com/file/d/1J9TUQcBEvV3l0GCIw1UjCT6dC7b0Y0LN/view?usp=sharing")
  },
  {
    id: "c4",
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "", // Add verification link
    category: "certificate",
    imageUrl: driveImage("") // Paste Google Drive link here
  },
  {
    id: "c5",
    title: "Power BI",
    issuer: "TuteDude",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/19NS8IIgGEvxAjpvoHqwc4BDW58GTWZX5/view?usp=sharing", // Add verification link
    category: "certificate",
    imageUrl: driveImage("https://drive.google.com/file/d/19NS8IIgGEvxAjpvoHqwc4BDW58GTWZX5/view?usp=sharing") // Paste Google Drive link here
  },
  {
    id: "c6",
    title: "Cisco Certified Data Analytics Essentials",
    issuer: "Cisco",
    date: "2025",
    credentialUrl: "Inprogress", // Add verification link
    category: "certificate",
    imageUrl: driveImage("Inprogress") // Paste Google Drive link here
  },

  // --- TRAININGS ---
  {
    id: "t0",
    title: "Power BI - Business Intelligence for Beginners to Advance",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-1d34b2de-d083-4bee-ab6b-d90e3997f2a8/",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1mRwtgxj447ZFzmwlz6kF63GBCR8Offnz/view?usp=sharing")
  },
  {
    id: "t1",
    title: "SQL for Data Science",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/OG8R3zSHVYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/19LUf4Dnk1BuTSKEBjhLK8EhZdKdiMmJ7/view?usp=sharing")
  },
  {
    id: "t2",
    title: "Business Intelligence using Excel Basics Tutorial",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/upI2rNItPYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1haAypKW_FPWy3bmv52udcgDF8De_esSf/view?usp=sharing")
  },
  {
    id: "t3",
    title: "Python Libraries for Data Science",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/3xoBLFG7TYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1KpWBmYRUN0ihJnM2Kzkk4UjwGsRFLuPX/view?usp=sharing")
  },
  {
    id: "t4",
    title: "Machine Learning using Python",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/RSv7pHmATYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1wop7093AuK1O1KlGaSUghk6LGKxlB9A4/view?usp=sharing")
  },
  {
    id: "t5",
    title: "Excel Dashboard for Beginners",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/8LMLV6wtPYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1SLEhgmvRZIRREPATHNIahuvUbMk6Q1T_/view?usp=sharing")
  },
  {
    id: "t6",
    title: "Programming with Python 3.X",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/V2Fq5zdATYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1I3DWQbu8Gfci1FV6b_Rg1dKoHKSZQ0Oy/view?usp=sharing")
  },
  {
    id: "t7",
    title: "Python for Data Analysis",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/F0Q1CxhATYb",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1oDEc6n9IJcVcKno2161VOYbBMF80JKwq/view?usp=sharing")
  },
  {
    id: "t8",
    title: "Data Analysis using Excel",
    issuer: "UpGrad",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1rDpibcJL8Q_fg0tzqQ-3ofup8GpKxSt8/view?usp=sharing",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/1gPX9kowsJoeeSgAtozMRQx0dMz7YbLVi/view?usp=sharing")
  },
  {
    id: "t9",
    title: "Gen AI Mastermind",
    issuer: "Outskill",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/13we4UVa0lmEJObzI8650MDzmHc0Gf_rW/view?usp=sharing",
    category: "training",
    imageUrl: driveImage("https://drive.google.com/file/d/13we4UVa0lmEJObzI8650MDzmHc0Gf_rW/view?usp=sharing")
  },
  {
    id: "t10",
    title: "Tableau for Data Analysis",
    issuer: "Intellipat",
    date: "2025",
    credentialUrl: "Inprogress",
    category: "training",
    imageUrl: driveImage("Inprogress")
  }
];
