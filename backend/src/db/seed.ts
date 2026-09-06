import mongoose from "mongoose";
import dotenv from "dotenv";
const bcrypt = require("bcryptjs");

dotenv.config();

import { TeamCategory } from "../models/teamCategory";
import { TeamMember } from "../models/teamMember";
import { User } from "../models/User";
import { BlogCategory } from "../models/BlogCategory";
import { Blog, Comments } from "../models/blog";
import { Services } from "../models/service";
import { Solutions } from "../models/solutions";
import { Work } from "../models/work";
import { Home } from "../models/HOME";
import { KPI } from "../models/KPi";
import { Outcomes } from "../models/Outcomes";
import { Capabilities } from "../models/capabilities";
import { Products } from "../models/product.model";
import { News } from "../models/news";
import { Resources } from "../models/resources";
import { Testimonial } from "../models/testimonial";
import { Brand } from "../models/Brand";
import { SeoPages } from "../models/SeoPages";
import { Notification } from "../models/notification";

const seedDatabase = async () => {
  if (mongoose.connection.readyState !== 1) {
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pulseplay";
    console.log("Connecting to MongoDB for seeding database...");
    await mongoose.connect(mongoURI);
    console.log("Connected successfully to MongoDB.");
  } else {
    console.log("Already connected to MongoDB for seeding database.");
  }

  // Clear existing collections & indexes
  console.log("Clearing existing collections...");
  await Promise.all([
    TeamCategory.deleteMany({}),
    TeamMember.deleteMany({}),
    User.deleteMany({}),
    BlogCategory.deleteMany({}),
    Blog.deleteMany({}),
    Comments.deleteMany({}),
    Services.deleteMany({}),
    Solutions.deleteMany({}),
    Work.deleteMany({}),
    Home.deleteMany({}),
    KPI.deleteMany({}),
    Outcomes.deleteMany({}),
    Capabilities.deleteMany({}),
    Products.deleteMany({}),
    News.deleteMany({}),
    Resources.deleteMany({}),
    Testimonial.deleteMany({}),
    Brand.deleteMany({}),
    SeoPages.deleteMany({}),
    Notification.deleteMany({}),
  ]);

  try {
    await User.collection.dropIndexes();
  } catch (err) {
    // Ignore if no indexes exist
  }

  const now = Date.now();
  const nowStr = new Date(now).toISOString();
  const editorNowStr = new Date(now + 2000).toISOString();

  // 1. Team Categories
  console.log("Seeding Team Categories...");
  const teamCategories = await TeamCategory.insertMany([
    { name: "Leadership", description: "Executive leadership and visionaries", status: true, createdAt: nowStr },
    { name: "Engineering", description: "Software engineers, cloud architects & AI specialists", status: true, createdAt: nowStr },
    { name: "Design & UX", description: "UI/UX product designers & brand artists", status: true, createdAt: nowStr },
    { name: "Product & Strategy", description: "Product managers & business strategists", status: true, createdAt: nowStr },
    { name: "Marketing & Growth", description: "Growth marketers & content strategists", status: true, createdAt: nowStr },
  ]);

  // 2. Team Members
  console.log("Seeding Team Members...");
  const adminMember = await new TeamMember({
    memberName: "Super Admin",
    memberAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/team/admin-avatar.jpg",
    pulseplayID: "PP-001",
    memberPersonlEmail: "admin@pulseplaydigital.com",
    memberPersonalEmail: "admin@pulseplaydigital.com",
    email: "admin@pulseplaydigital.com",
    memberPhone: "+1234567890",
    slug: "super-admin",
    memberDesignation: "Chief Technology Officer",
    shortDescription: "Lead architect driving technical excellence and innovation.",
    memberDescription: "Experienced engineering leader with over 12 years of experience building high-scale digital platforms.",
    status: true,
    enabled: true,
    createdAt: nowStr,
    memberCategory: [{ value: teamCategories[0]._id.toString(), label: "Leadership" }],
    rating: { imagine: 95, design: 90, build: 98, perform: 96 }
  }).save();

  const editorMember = await new TeamMember({
    memberName: "Editor User",
    memberAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/team/editor-avatar.jpg",
    pulseplayID: "PP-002",
    memberPersonlEmail: "editor@pulseplaydigital.com",
    memberPersonalEmail: "editor@pulseplaydigital.com",
    email: "editor@pulseplaydigital.com",
    memberPhone: "+1987654321",
    slug: "editor-user",
    memberDesignation: "Lead Content Editor",
    shortDescription: "Oversees content strategy, publications, and digital stories.",
    memberDescription: "Content strategist passionate about technology narratives, product communication, and digital marketing.",
    status: true,
    enabled: true,
    createdAt: nowStr,
    memberCategory: [{ value: teamCategories[4]._id.toString(), label: "Marketing & Growth" }],
    rating: { imagine: 90, design: 92, build: 85, perform: 90 }
  }).save();

  // 3. Users
  console.log("Seeding Users...");
  const adminPasswordHash = await bcrypt.hash("admin123", 10);
  const editorPasswordHash = await bcrypt.hash("editor123", 10);

  const adminUser = await new User({
    username: "admin",
    email: "admin@pulseplaydigital.com",
    password: adminPasswordHash,
    role: "admin",
    member: adminMember._id,
    avatar: adminMember.memberAvatar,
    assignRole: ["Admin", "SuperAdmin"],
    createdAt: nowStr,
  }).save();

  const editorUser = await new User({
    username: "editor",
    email: "editor@pulseplaydigital.com",
    password: editorPasswordHash,
    role: "Editor",
    member: editorMember._id,
    avatar: editorMember.memberAvatar,
    assignRole: ["Editor"],
    createdAt: editorNowStr,
  }).save();

  // 4. Blog Categories & Blogs
  console.log("Seeding Blog Categories & Blogs...");
  const blogCat1 = await new BlogCategory({ title: "Engineering & Architecture" }).save();
  const blogCat2 = await new BlogCategory({ title: "AI & Innovation" }).save();

  const sampleBlog = await new Blog({
    blogTitle: "Building Scalable Microservices with Node.js and GraphQL",
    blogSubTitle: "A modern guide to modular architecture and API performance.",
    blogAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/blogs/graphql-microservices.jpg",
    blogAuthor: "Super Admin",
    slug: "building-scalable-microservices-nodejs-graphql",
    user: adminUser._id,
    author: [adminUser._id],
    category: [{ value: blogCat1._id.toString(), label: "Engineering & Architecture" }],
    blogtags: [{ value: "GraphQL" }, { value: "Node.js" }, { value: "Microservices" }],
    views: 342,
    blogDescription: "Explore best practices for designing distributed systems with GraphQL and microservices.",
    blogDescriptionHtml: "<p>Microservices offer agility and scalability...</p>",
    createdAt: nowStr,
    publish: true,
    firstPublish: true,
    seo: {
      metaTitle: "Building Scalable Microservices with Node.js & GraphQL",
      metaDescription: "Learn how to architect high-performance GraphQL services.",
      keyword: ["GraphQL", "NodeJS", "Microservices"]
    }
  }).save();

  await new Comments({
    name: "Alex Johnson",
    email: "alex@example.com",
    comment: "Great article! Very helpful insights on GraphQL stitching.",
    status: true,
    createdAt: nowStr,
    blog: sampleBlog._id,
  }).save();

  // 5. Services
  console.log("Seeding Services...");
  await Services.insertMany([
    {
      servicesName: "Full-Stack Engineering",
      servicesCode: "FSE-01",
      services: "Full-Stack Engineering",
      slug: "full-stack-engineering",
      servicesAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/fullstack.jpg",
      servicesCover: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/fullstack-cover.jpg",
      servicesVideo: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/video1.mp4",
      servicesHeading: "Enterprise Product Engineering",
      servicesHeading1: "Scalable Web & Mobile Apps",
      servicesHeading2: "Modern Tech Stack Architecture",
      servicesPara1: "We build secure, robust, and scalable software solutions tailored for enterprise growth.",
      servicesPara2: "From GraphQL APIs to Next.js micro-frontends, we deliver seamless user experiences.",
      servicesImg1: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/img1.jpg",
      servicesImg2: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/img2.jpg",
      svg: "<svg>...</svg>",
      sort: "1",
      capabilities: [{ label: "React / Next.js" }, { label: "Node.js & GraphQL" }, { label: "Cloud Native" }],
      expert: [{ value: adminMember._id.toString(), label: "Super Admin" }],
      status: true,
      createdAt: nowStr
    },
    {
      servicesName: "AI & Machine Learning",
      servicesCode: "AIML-02",
      services: "AI & Machine Learning",
      slug: "ai-machine-learning",
      servicesAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/ai.jpg",
      servicesCover: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/ai-cover.jpg",
      servicesVideo: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/video2.mp4",
      servicesHeading: "Intelligent Automation & Predictive Models",
      servicesHeading1: "Generative AI Solutions",
      servicesHeading2: "Custom ML Pipelines",
      servicesPara1: "Harness AI to automate complex business workflows and transform customer interactions.",
      servicesPara2: "Custom LLM fine-tuning, computer vision, and real-time predictive analytics.",
      servicesImg1: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/ai-img1.jpg",
      servicesImg2: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/services/ai-img2.jpg",
      svg: "<svg>...</svg>",
      sort: "2",
      capabilities: [{ label: "LLMs & RAG" }, { label: "Computer Vision" }, { label: "Predictive Analytics" }],
      expert: [{ value: adminMember._id.toString(), label: "Super Admin" }],
      status: true,
      createdAt: nowStr
    }
  ]);

  // 6. Solutions
  console.log("Seeding Solutions...");
  await Solutions.insertMany([
    {
      solutionsName: "Enterprise Digital Core Transformation",
      solutionsAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/solutions/enterprise.jpg",
      solutionsCover: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/solutions/enterprise-cover.jpg",
      svg: "<svg>...</svg>",
      sort: "1",
      slug: "enterprise-digital-core-transformation",
      solutionsHeading: "Transform Legacy Systems into Agile Cloud Cores",
      solutionsHeading1: "Modernize Enterprise Architecture",
      solutionsPara1: "Accelerate digital transformation with cloud-native microservices and composable backend systems.",
      solutionsImg1: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/solutions/sol1.jpg",
      solutionsImg2: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/solutions/sol2.jpg",
      colorCode: "#0f172a",
      paraList: [{ label: "Cloud Migration" }, { label: "DevOps Automation" }],
      list: [{ logo: "logo1.png", head: "High Performance", para: "Guaranteed 99.99% uptime." }],
      status: true,
      createdAt: nowStr
    }
  ]);

  // 7. Work (Case Studies)
  console.log("Seeding Work (Case Studies)...");
  const caseStudy1 = await new Work({
    projectName: "FinFlow Global Banking",
    projectLogo: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/work/finflow-logo.png",
    sliderImage: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/work/finflow-slider.jpg",
    clientColorTheme: "#1e40af",
    sort: 1,
    location: "New York, USA",
    projectDescription: "A next-generation digital banking suite serving over 2 million active mobile subscribers.",
    year: "2025",
    landingDescription: "Revolutionizing digital transactions with sub-second processing and zero latency.",
    clientCover: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/work/finflow-cover.jpg",
    projectCover: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/work/finflow-project.jpg",
    areas: "Fintech, Mobile Banking",
    slug: "finflow-global-banking",
    status: true,
    createdAt: nowStr,
    outcomes: {
      outcomes: true,
      list: [{ title: "Transactions Processed", label: "500M+" }, { title: "App Store Rating", label: "4.9/5" }]
    }
  }).save();

  // 8. Homepage
  console.log("Seeding Homepage...");
  await Home.create({
    image: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/home/hero-banner.jpg",
    work: caseStudy1._id,
    url: "https://pulseplaydigital.com",
    sort: 1,
    color: "#0f172a",
  });

  // 9. KPIs
  console.log("Seeding KPIs...");
  await KPI.insertMany([
    { title: "99.99%", description: "Cloud Infrastructure Uptime", sort: 1, color: "#10b981" },
    { title: "500+", description: "Digital Projects Delivered", sort: 2, color: "#3b82f6" },
    { title: "10M+", description: "Active Platform End-Users", sort: 3, color: "#8b5cf6" },
    { title: "50+", description: "Global Enterprise Clients", sort: 4, color: "#f59e0b" },
  ]);

  // 10. Outcomes & Capabilities
  console.log("Seeding Outcomes & Capabilities...");
  await Outcomes.create({
    title: "Accelerated Time-to-Market",
    para: "Our automated CI/CD pipelines reduce deployment cycles from weeks to minutes.",
    createdAt: nowStr,
  });

  await Capabilities.create({
    capabilitiesTitle: "Core Technology Stack",
    capabilitiesDescription: "Battle-tested technologies powering mission-critical applications.",
    capabilitiesList: [{ value: "React & Next.js", avatar: "react.png" }, { value: "Node.js & Express", avatar: "node.png" }],
    createdAt: nowStr,
  });

  // 11. Products
  console.log("Seeding Products...");
  await Products.create({
    productName: "PulseCMS",
    slug: "pulse-cms",
    status: true,
    heroSection: {
      title: "Headless Content Management Reimagined",
      image: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/products/cms-hero.png",
      paragraph: "Empower content creators and developer teams with real-time GraphQL APIs and modular block builders."
    },
    keyFeatures: [
      { title: "GraphQL First", svg: "<svg></svg>", paragraph: "Query exact data shapes with speed." },
      { title: "Role-Based Access", svg: "<svg></svg>", paragraph: "Granular permissions for enterprise security." }
    ],
    para: "Built for speed, security, and scalability.",
    image: {
      laptop: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/products/laptop.png",
      dashBoard: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/products/dashboard.png",
      mobile: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/products/mobile.png"
    },
    experts: [adminMember._id]
  });

  // 12. News & Press Releases
  console.log("Seeding News...");
  await News.create({
    newsTitle: "PulsePlay Digital Named Top Digital Agency 2026",
    newsAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/news/award-news.jpg",
    newsSubTitle: "Recognized for excellence in AI-driven enterprise transformation.",
    newsAuthor: "Editor User",
    slug: "pulseplay-digital-named-top-digital-agency-2026",
    newsDescription: "We are thrilled to announce our industry recognition...",
    newsDescriptionHtml: "<p>We are thrilled to announce our industry recognition...</p>",
    createdAt: nowStr,
    publish: true,
    seo: {
      metaTitle: "PulsePlay Digital Named Top Digital Agency 2026",
      metaDescription: "Industry award news and achievements.",
      keyword: ["Award", "Agency", "PulsePlay"]
    }
  });

  // 13. Resources
  console.log("Seeding Resources...");
  await Resources.create({
    title: "Enterprise Micro-Frontend Architecture Guide 2026",
    sortDescription: "A comprehensive whitepaper for scaling frontend engineering across global teams.",
    video: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/resources/video.mp4",
    reportDescription: "Learn how to decouple legacy monoliths using micro-frontends and Module Federation.",
    reportImage: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/resources/cover.jpg",
    reportPdf: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/resources/guide.pdf",
    reportAvatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/resources/avatar.jpg",
    createdAt: nowStr,
    status: true,
    slug: "enterprise-micro-frontend-architecture-guide-2026",
    sort: "1",
  });

  // 14. Testimonials & Brands
  console.log("Seeding Testimonials & Brands...");
  await Testimonial.create({
    testimonialName: "Sarah Jenkins",
    testimoniaDesignation: "VP of Engineering, FinFlow Bank",
    testimonialDescription: "PulsePlay Digital delivered our core banking suite 2 months ahead of schedule with flawless code quality.",
    testimonialImage: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/testimonials/sarah.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    slug: "sarah-jenkins-finflow",
    sort: 1,
    status: true,
    createdAt: nowStr,
  });

  await Brand.create({
    avatar: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/brands/finflow.png",
    title: "FinFlow Global",
    para: "Banking & Financial Services",
    url: "https://finflow.example.com",
    createdAt: nowStr,
  });

  // 15. SEO Pages & Notifications
  console.log("Seeding SEO Pages & Notifications...");
  await SeoPages.create({
    name: "Homepage",
    seo: {
      metaTitle: "PulsePlay Digital | AI & Enterprise Product Agency",
      metaDescription: "We design, build, and scale world-class software platforms for enterprises worldwide.",
      keyword: ["Digital Agency", "AI Engineering", "CMS"]
    }
  });

  await Notification.create({
    notificationType: "System",
    notification: ["Database seeded successfully with initial dummy dataset."],
    createdAt: nowStr
  });

  console.log("==========================================");
  console.log("✅ DATABASE SEEDING COMPLETED SUCCESSFULLY!");
  console.log("Default Admin Account:");
  console.log("  Email:    admin@pulseplaydigital.com");
  console.log("  Password: admin123");
  console.log("Default Editor Account:");
  console.log("  Email:    editor@pulseplaydigital.com");
  console.log("  Password: editor123");
  console.log("==========================================");

};

export { seedDatabase };

if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("❌ Error seeding database:", err);
      process.exit(1);
    });
}

