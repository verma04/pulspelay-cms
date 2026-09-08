import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

// Import all models
import { User } from "../models/User";
import { TeamCategory } from "../models/teamCategory";
import { TeamMember } from "../models/teamMember";
import { BlogCategory } from "../models/BlogCategory";
import { Blog, Comments } from "../models/blog";
import { Category } from "../models/category";
import { Services } from "../models/service";
import { Solutions } from "../models/solutions";
import { Work } from "../models/work";
import { Home } from "../models/HOME";
import { KPI } from "../models/KPi";
import { Outcomes } from "../models/Outcomes";
import { Capabilities } from "../models/capabilities";
import { Products } from "../models/product.model";
import { NewsCategory } from "../models/newsCategory";
import { News } from "../models/news";
import { ResourcesTypes } from "../models/resourcesTypes";
import { ResourcesTopic } from "../models/resourcesTopic";
import { Resources } from "../models/resources";
import { Carrer } from "../models/carrer";
import { CareerForm } from "../models/careerForm";
import { Testimonial } from "../models/testimonial";
import { Awards } from "../models/Awards";
import { Brand } from "../models/Brand";
import { BrandArch } from "../models/brandAch";
import { Adviser } from "../models/adviser";
import { Contactus } from "../models/contactUs";
import { HireUsForm } from "../models/HireUs";
import { NewsLetter } from "../models/NewsLetter";
import { SeoPages } from "../models/SeoPages";
import { Notification } from "../models/notification";
import { Image } from "../models/Image";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/pulseplay";

async function seedDatabase() {
  console.log("🌱 [Seed] Connecting to MongoDB at:", MONGODB_URI.split("@").pop() || MONGODB_URI);
  mongoose.set("strictQuery", false);

  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);

  console.log(" Connected to MongoDB successfully.\n");

  console.log("🧹 [Seed] Cleaning existing dummy collections...");
  await Promise.all([
    User.deleteMany({}),
    TeamCategory.deleteMany({}),
    TeamMember.deleteMany({}),
    BlogCategory.deleteMany({}),
    Blog.deleteMany({}),
    Comments.deleteMany({}),
    Category.deleteMany({}),
    Services.deleteMany({}),
    Solutions.deleteMany({}),
    Work.deleteMany({}),
    Home.deleteMany({}),
    KPI.deleteMany({}),
    Outcomes.deleteMany({}),
    Capabilities.deleteMany({}),
    Products.deleteMany({}),
    NewsCategory.deleteMany({}),
    News.deleteMany({}),
    ResourcesTypes.deleteMany({}),
    ResourcesTopic.deleteMany({}),
    Resources.deleteMany({}),
    Carrer.deleteMany({}),
    CareerForm.deleteMany({}),
    Testimonial.deleteMany({}),
    Awards.deleteMany({}),
    Brand.deleteMany({}),
    BrandArch.deleteMany({}),
    Adviser.deleteMany({}),
    Contactus.deleteMany({}),
    HireUsForm.deleteMany({}),
    NewsLetter.deleteMany({}),
    SeoPages.deleteMany({}),
    Notification.deleteMany({}),
    Image.deleteMany({}),
  ]);
  console.log(" Existing collections cleared.\n");

  // 1. Team Categories
  console.log("👥 [1/18] Seeding Team Categories...");
  const teamCategories = await TeamCategory.insertMany([
    {
      name: "Leadership",
      description: "Executive and Strategic Leadership Team",
      createdAt: new Date("2023-01-01").toISOString(),
      status: true,
    },
    {
      name: "Engineering",
      description: "Core Software Architecture, Backend, Frontend & DevOps",
      createdAt: new Date("2023-01-02").toISOString(),
      status: true,
    },
    {
      name: "Design & UX",
      description: "Product Design, Interaction Design, and Visual Branding",
      createdAt: new Date("2023-01-03").toISOString(),
      status: true,
    },
    {
      name: "Product & Strategy",
      description: "Product Management, Delivery, and Digital Strategy",
      createdAt: new Date("2023-01-04").toISOString(),
      status: true,
    },
    {
      name: "Marketing & Growth",
      description: "SEO, Performance Marketing, and Growth Strategy",
      createdAt: new Date("2023-01-05").toISOString(),
      status: true,
    },
  ]);

  // 2. Team Members
  console.log("🧑‍💼 [2/18] Seeding Team Members...");
  const teamMembers = await TeamMember.insertMany([
    {
      memberName: "Alex Morgan",
      pulseplayID: "PPD001",
      slug: "alex-morgan",
      memberAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      memberCover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&auto=format&fit=crop&q=80",
      email: "admin@pulseplaydigital.com",
      memberPersonalEmail: "admin@pulseplaydigital.com",
      memberPersonlEmail: "admin@pulseplaydigital.com",
      memberPhone: "+1 (555) 234-5678",
      memberDesignation: "Chief Executive Officer & Founder",
      shortDescription: "Visionary technology leader with 15+ years driving digital transformation and SaaS innovation.",
      memberDescription: "Alex has led global product engineering and design teams across FinTech, HealthTech, and Enterprise Cloud.",
      memberDOB: "1988-04-12",
      bloodGroup: "O+",
      whatsApp: "+15552345678",
      gender: "Male",
      maritalstatus: "Married",
      sort: 1,
      status: true,
      enabled: true,
      memberWorkType: "Full-time",
      memberDateOfJoinnng: "2020-01-10",
      education: "M.S. Computer Science, Stanford University",
      dreams: ["Build scalable cloud systems", "Empower 100M+ users globally"],
      interest: ["Artificial Intelligence", "Cloud Architecture", "Product Design"],
      certificate: ["AWS Certified Solutions Architect", "Google Cloud Professional"],
      memberCategory: [
        { value: teamCategories[0]._id.toString(), label: "Leadership" },
      ],
      social: {
        linkedin: "https://linkedin.com/in/alexmorgan",
        twitter: "https://twitter.com/alexmorgan",
        facebook: "https://facebook.com/alexmorgan",
        portfolio: "https://alexmorgan.dev",
      },
      rating: { imagine: 95, design: 90, build: 98, perform: 96 },
      address: {
        addressline1: "100 Market St, Suite 400",
        addressline2: "Financial District",
        city: "San Francisco",
        state: "CA",
        pincode: "94105",
      },
      createdAt: new Date("2023-01-10").toISOString(),
    },
    {
      memberName: "Sophia Chen",
      pulseplayID: "PPD002",
      slug: "sophia-chen",
      memberAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
      memberCover: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80",
      email: "sophia.chen@pulseplaydigital.com",
      memberPersonalEmail: "sophia.chen@pulseplaydigital.com",
      memberPersonlEmail: "sophia.chen@pulseplaydigital.com",
      memberPhone: "+1 (555) 345-6789",
      memberDesignation: "Chief Technology Officer",
      shortDescription: "Specialist in distributed microservices, scalable cloud architectures, and GraphQL APIs.",
      memberDescription: "Sophia architected high-throughput backend infrastructure serving millions of daily requests.",
      memberDOB: "1990-08-22",
      bloodGroup: "A+",
      whatsApp: "+15553456789",
      gender: "Female",
      maritalstatus: "Single",
      sort: 2,
      status: true,
      enabled: true,
      memberWorkType: "Full-time",
      memberDateOfJoinnng: "2020-03-15",
      education: "B.Tech Computer Engineering, MIT",
      dreams: ["Open source distributed DBs", "Mentor next-gen female tech leaders"],
      interest: ["Kubernetes", "GraphQL", "Rust", "High Performance Computing"],
      certificate: ["Certified Kubernetes Administrator (CKA)"],
      memberCategory: [
        { value: teamCategories[1]._id.toString(), label: "Engineering" },
      ],
      social: {
        linkedin: "https://linkedin.com/in/sophiachen",
        twitter: "https://twitter.com/sophiatech",
        github: "https://github.com/sophiachen",
      },
      rating: { imagine: 90, design: 85, build: 99, perform: 98 },
      address: {
        addressline1: "450 Mission St",
        city: "San Francisco",
        state: "CA",
        pincode: "94105",
      },
      createdAt: new Date("2023-01-11").toISOString(),
    },
    {
      memberName: "Marcus Vance",
      pulseplayID: "PPD003",
      slug: "marcus-vance",
      memberAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      memberCover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      email: "marcus.vance@pulseplaydigital.com",
      memberPersonalEmail: "marcus.vance@pulseplaydigital.com",
      memberPersonlEmail: "marcus.vance@pulseplaydigital.com",
      memberPhone: "+1 (555) 456-7890",
      memberDesignation: "Head of Design & Creative Director",
      shortDescription: "Award-winning UX/UI designer crafting human-centered digital experiences and design systems.",
      memberDescription: "Marcus has crafted design systems for Fortune 500 enterprises and emerging tech startups.",
      memberDOB: "1991-11-05",
      bloodGroup: "B+",
      whatsApp: "+15554567890",
      gender: "Male",
      maritalstatus: "Married",
      sort: 3,
      status: true,
      enabled: true,
      memberWorkType: "Full-time",
      memberDateOfJoinnng: "2020-06-01",
      education: "B.A. Graphic & Interactive Design, RISD",
      dreams: ["Universal accessible design systems"],
      interest: ["Typography", "3D WebGL", "Motion UI"],
      certificate: ["Nielsen Norman UX Master Certified"],
      memberCategory: [
        { value: teamCategories[2]._id.toString(), label: "Design & UX" },
      ],
      social: {
        linkedin: "https://linkedin.com/in/marcusvance",
        dribbble: "https://dribbble.com/marcusvance",
      },
      rating: { imagine: 98, design: 99, build: 88, perform: 92 },
      address: {
        addressline1: "789 Broadway",
        city: "New York",
        state: "NY",
        pincode: "10003",
      },
      createdAt: new Date("2023-01-12").toISOString(),
    },
    {
      memberName: "Elena Rostova",
      pulseplayID: "PPD004",
      slug: "elena-rostova",
      memberAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
      memberCover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&auto=format&fit=crop&q=80",
      email: "editor@pulseplaydigital.com",
      memberPersonalEmail: "editor@pulseplaydigital.com",
      memberPersonlEmail: "editor@pulseplaydigital.com",
      memberPhone: "+1 (555) 567-8901",
      memberDesignation: "Principal Product Manager & Content Lead",
      shortDescription: "Driving agile product discovery, content strategy, and roadmap execution.",
      memberDescription: "Elena bridges business goals and engineering execution to build category-defining software.",
      memberDOB: "1993-02-18",
      bloodGroup: "AB+",
      whatsApp: "+15555678901",
      gender: "Female",
      maritalstatus: "Single",
      sort: 4,
      status: true,
      enabled: true,
      memberWorkType: "Full-time",
      memberDateOfJoinnng: "2021-02-01",
      education: "MBA, Harvard Business School",
      dreams: ["Zero-friction collaboration software"],
      interest: ["Product Strategy", "Technical Writing", "Data Analytics"],
      certificate: ["Certified Scrum Product Owner (CSPO)"],
      memberCategory: [
        { value: teamCategories[3]._id.toString(), label: "Product & Strategy" },
      ],
      social: {
        linkedin: "https://linkedin.com/in/elenarostova",
        twitter: "https://twitter.com/elenaprod",
      },
      rating: { imagine: 92, design: 88, build: 90, perform: 95 },
      address: {
        addressline1: "220 King St W",
        city: "Toronto",
        state: "ON",
        pincode: "M5V 3M2",
      },
      createdAt: new Date("2023-01-13").toISOString(),
    },
    {
      memberName: "David Kalu",
      pulseplayID: "PPD005",
      slug: "david-kalu",
      memberAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      memberCover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
      email: "david.kalu@pulseplaydigital.com",
      memberPersonalEmail: "david.kalu@pulseplaydigital.com",
      memberPersonlEmail: "david.kalu@pulseplaydigital.com",
      memberPhone: "+1 (555) 678-9012",
      memberDesignation: "Lead Cloud & DevOps Architect",
      shortDescription: "Cloud infrastructure automation, Kubernetes orchestration, and continuous security.",
      memberDescription: "David manages multi-region cloud deployments with 99.999% availability SLAs.",
      memberDOB: "1989-09-30",
      bloodGroup: "O-",
      whatsApp: "+15556789012",
      gender: "Male",
      maritalstatus: "Married",
      sort: 5,
      status: true,
      enabled: true,
      memberWorkType: "Full-time",
      memberDateOfJoinnng: "2021-05-15",
      education: "B.S. Information Systems, Georgia Tech",
      dreams: ["Fully autonomous resilient cloud mesh"],
      interest: ["Terraform", "CI/CD", "Site Reliability Engineering"],
      certificate: ["AWS Solutions Architect Professional", "Terraform Associate"],
      memberCategory: [
        { value: teamCategories[1]._id.toString(), label: "Engineering" },
      ],
      social: {
        linkedin: "https://linkedin.com/in/davidkalu",
        github: "https://github.com/davidkalu",
      },
      rating: { imagine: 88, design: 80, build: 97, perform: 98 },
      address: {
        addressline1: "1200 Peachtree St NE",
        city: "Atlanta",
        state: "GA",
        pincode: "30309",
      },
      createdAt: new Date("2023-01-14").toISOString(),
    },
    {
      memberName: "Priya Sharma",
      pulseplayID: "PPD006",
      slug: "priya-sharma",
      memberAvatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80",
      memberCover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
      email: "priya.sharma@pulseplaydigital.com",
      memberPersonalEmail: "priya.sharma@pulseplaydigital.com",
      memberPersonlEmail: "priya.sharma@pulseplaydigital.com",
      memberPhone: "+1 (555) 789-0123",
      memberDesignation: "Head of AI & Machine Learning",
      shortDescription: "Specializing in Large Language Models, Generative AI workflows, and Predictive Analytics.",
      memberDescription: "Priya leads AI research and production deployment of intelligent cognitive agents.",
      memberDOB: "1992-07-14",
      bloodGroup: "B-",
      whatsApp: "+15557890123",
      gender: "Female",
      maritalstatus: "Single",
      sort: 6,
      status: true,
      enabled: true,
      memberWorkType: "Full-time",
      memberDateOfJoinnng: "2022-01-05",
      education: "Ph.D. Artificial Intelligence, UC Berkeley",
      dreams: ["Ethical AI that augments human creativity"],
      interest: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
      certificate: ["DeepLearning.AI TensorFlow Developer"],
      memberCategory: [
        { value: teamCategories[1]._id.toString(), label: "Engineering" },
      ],
      social: {
        linkedin: "https://linkedin.com/in/priyasharma",
        twitter: "https://twitter.com/priyasharma_ai",
      },
      rating: { imagine: 98, design: 85, build: 96, perform: 97 },
      address: {
        addressline1: "2100 University Ave",
        city: "Berkeley",
        state: "CA",
        pincode: "94704",
      },
      createdAt: new Date("2023-01-15").toISOString(),
    },
  ]);

  // 3. Admin & CMS Users
  console.log("🔐 [3/18] Seeding Users with Hashed Passwords...");
  const adminPasswordHash = await bcrypt.hash("admin123", 10);
  const editorPasswordHash = await bcrypt.hash("editor123", 10);

  const allRoles = [
    "Admin",
    "SuperAdmin",
    "Editor",
    "Work",
    "Blog",
    "Services",
    "Solutions",
    "Team",
    "News",
    "Resources",
    "Careers",
    "Testimonials",
    "Awards",
    "Advisers",
    "Products",
    "Contacts",
    "role",
    "seo",
  ];

  const users = await User.insertMany([
    {
      username: "admin",
      password: adminPasswordHash,
      email: "admin@pulseplaydigital.com",
      role: "admin",
      member: teamMembers[0]._id,
      assignRole: allRoles,
      avatar: teamMembers[0].memberAvatar,
      createdAt: new Date("2023-01-01T00:00:01.000Z").toISOString(),
    },
    {
      username: "editor",
      password: editorPasswordHash,
      email: "editor@pulseplaydigital.com",
      role: "editor",
      member: teamMembers[3]._id,
      assignRole: ["Editor", "Blog", "News", "Resources", "Testimonials"],
      avatar: teamMembers[3].memberAvatar,
      createdAt: new Date("2023-01-01T00:00:02.000Z").toISOString(),
    },
  ]);

  // 4. Blog Categories
  console.log("🏷️  [4/18] Seeding Blog Categories...");
  const blogCategories = await BlogCategory.insertMany([
    { title: "Artificial Intelligence" },
    { title: "Cloud Architecture" },
    { title: "Product Design & UX" },
    { title: "Digital Transformation" },
    { title: "Engineering Best Practices" },
    { title: "Cybersecurity & Scale" },
  ]);

  // 5. Blogs & Comments
  console.log("📝 [5/18] Seeding Blogs & Comments...");
  const blogsData = [
    {
      blogTitle: "Building Autonomous AI Agents with LangChain and Llama",
      slug: "building-autonomous-ai-agents-langchain-llama",
      blogSubTitle: "A deep dive into multi-agent orchestration, tool calling, and deterministic workflows.",
      blogAuthor: "Priya Sharma",
      blogAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      user: users[0]._id,
      author: [users[0]._id],
      category: [{ value: blogCategories[0]._id.toString(), label: "Artificial Intelligence" }],
      blogtags: [{ value: "AI" }, { value: "LLM" }, { value: "LangChain" }, { value: "Python" }],
      views: 1420,
      publish: true,
      firstPublish: true,
      blogDescription: "Autonomous agents are redefining how software solves complex multi-step reasoning tasks.",
      blogDescriptionHtml: `
        <h2>The Evolution of Autonomous AI Agents</h2>
        <p>In modern enterprise software, large language models are evolving from passive text generators into active autonomous reasoning engines capable of planning, executing tools, and verifying outcomes.</p>
        <h3>Key Architectural Pillars</h3>
        <ul>
          <li><strong>Deterministic Execution Guardrails:</strong> Ensuring AI actions adhere to strict business rules.</li>
          <li><strong>Multi-Agent Handshakes:</strong> Decomposing tasks across specialized agent personas.</li>
          <li><strong>Memory & Context Caching:</strong> Maintaining state across long-lived workflows.</li>
        </ul>
        <p>By leveraging robust orchestration frameworks, engineering teams can build resilient AI workflows that deliver real business value.</p>
      `,
      seo: {
        metaTitle: "Building Autonomous AI Agents with LangChain & Llama | PulsePlay",
        metaDescription: "Learn how to build and orchestrate production-ready autonomous AI agents with modern tooling.",
        keyword: ["AI agents", "LangChain", "Llama 3", "Machine Learning"],
      },
      createdAt: new Date("2023-04-15").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      blogTitle: "Next-Gen Microservices: Moving Beyond Monoliths to Event-Driven Mesh",
      slug: "next-gen-microservices-event-driven-mesh",
      blogSubTitle: "How to decouple distributed systems for sub-millisecond latency and effortless elasticity.",
      blogAuthor: "Sophia Chen",
      blogAvatar: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      user: users[0]._id,
      author: [users[0]._id],
      category: [{ value: blogCategories[1]._id.toString(), label: "Cloud Architecture" }],
      blogtags: [{ value: "Microservices" }, { value: "Kafka" }, { value: "Cloud" }, { value: "DevOps" }],
      views: 980,
      publish: true,
      firstPublish: true,
      blogDescription: "Event-driven architecture combined with service meshes unlocks unparalleled scale.",
      blogDescriptionHtml: `
        <h2>Transitioning to Event-Driven Resilience</h2>
        <p>As systems grow beyond single datacenter boundaries, synchronous REST calls introduce compounding latency and failure modes. Event-driven architectures replace point-to-point couplings with distributed log streams.</p>
        <h3>Core Benefits</h3>
        <p>Decoupled producers, asynchronous processing queues, and real-time event distribution allow systems to scale seamlessly under sudden traffic spikes.</p>
      `,
      seo: {
        metaTitle: "Next-Gen Event-Driven Microservices Architecture | PulsePlay",
        metaDescription: "Explore architectural strategies for building distributed event-driven microservices at scale.",
        keyword: ["Microservices", "Event Driven", "Kafka", "Cloud Scale"],
      },
      createdAt: new Date("2023-05-20").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      blogTitle: "Design Systems in 2025: Bridging Tokens, Micro-Interactions, and Code",
      slug: "design-systems-tokens-micro-interactions",
      blogSubTitle: "Crafting scalable component libraries that empower designers and developers alike.",
      blogAuthor: "Marcus Vance",
      blogAvatar: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      user: users[1]._id,
      author: [users[1]._id],
      category: [{ value: blogCategories[2]._id.toString(), label: "Product Design & UX" }],
      blogtags: [{ value: "DesignSystems" }, { value: "Figma" }, { value: "UI/UX" }, { value: "CSS" }],
      views: 1870,
      publish: true,
      firstPublish: true,
      blogDescription: "A great design system is not just a UI kit; it is a shared language and foundation for engineering speed.",
      blogDescriptionHtml: `
        <h2>Unifying Product Design and Front-End Code</h2>
        <p>Modern design systems bridge the gap between design mockups and production web components through synchronized design tokens, accessible color palettes, and fluid typography.</p>
        <p>When design tokens map directly to CSS variables and React components, product velocity increases by over 40%.</p>
      `,
      seo: {
        metaTitle: "Modern Design Systems & Component Architecture | PulsePlay",
        metaDescription: "Best practices for architecting scalable design systems with design tokens and reusable UI primitives.",
        keyword: ["Design Systems", "UI/UX", "Design Tokens", "Figma"],
      },
      createdAt: new Date("2023-06-10").toISOString(),
      updatedBy: users[1]._id,
    },
    {
      blogTitle: "Zero-Trust Cloud Security for High-Growth Enterprises",
      slug: "zero-trust-cloud-security-enterprise",
      blogSubTitle: "Implementing identity-first perimeter defense, automated secret rotation, and least privilege access.",
      blogAuthor: "David Kalu",
      blogAvatar: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      user: users[0]._id,
      author: [users[0]._id],
      category: [{ value: blogCategories[5]._id.toString(), label: "Cybersecurity & Scale" }],
      blogtags: [{ value: "Security" }, { value: "ZeroTrust" }, { value: "Cloud" }, { value: "AWS" }],
      views: 740,
      publish: true,
      firstPublish: true,
      blogDescription: "Traditional network perimeters are obsolete. Modern cloud security demands continuous verification.",
      blogDescriptionHtml: `
        <h2>The Principles of Zero-Trust Architecture</h2>
        <p>Never trust, always verify. By enforcing mutual TLS authentication, ephemeral access credentials, and real-time anomaly detection, organizations can protect critical workloads in hybrid multi-cloud environments.</p>
      `,
      seo: {
        metaTitle: "Zero-Trust Cloud Security Guide | PulsePlay",
        metaDescription: "Comprehensive enterprise guide to zero-trust cloud architecture and continuous compliance.",
        keyword: ["Zero Trust", "Cloud Security", "DevSecOps", "Compliance"],
      },
      createdAt: new Date("2023-07-01").toISOString(),
      updatedBy: users[0]._id,
    },
  ];

  const blogs = await Blog.insertMany(blogsData);

  // Comments for blogs
  console.log("💬 Seeding Blog Comments...");
  const comments = await Comments.insertMany([
    {
      name: "Jonathan Reed",
      email: "jreed@techcorp.io",
      comment: "Incredible breakdown of agent orchestration! The tips on memory caching solved our immediate bottleneck.",
      blog: blogs[0]._id,
      status: true,
      createdAt: new Date("2023-04-16").toISOString(),
    },
    {
      name: "Emily Watson",
      email: "emily@designhub.co",
      comment: "Marcus, your design system token methodology has completely transformed our sprint velocity.",
      blog: blogs[2]._id,
      status: true,
      createdAt: new Date("2023-06-12").toISOString(),
    },
  ]);

  // Link comments back to blogs
  await Blog.updateOne({ _id: blogs[0]._id }, { $push: { comments: comments[0]._id } });
  await Blog.updateOne({ _id: blogs[2]._id }, { $push: { comments: comments[1]._id } });

  // 6. Services
  console.log("⚙️  [6/18] Seeding Services...");
  const services = await Services.insertMany([
    {
      servicesName: "Full-Stack Web & Mobile Engineering",
      slug: "full-stack-web-mobile-engineering",
      servicesCode: "ENG-01",
      services: "Full-Stack Development",
      servicesAvatar: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      servicesCover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
      servicesVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      servicesHeading: "Engineered for Velocity, Built for Scale",
      servicesHeading1: "Modern Cloud-Native Tech Stacks",
      servicesHeading2: "High-Performance Applications",
      servicesPara1: "We build reactive, accessible, and ultra-fast web and mobile applications using React, Next.js, Node.js, GraphQL, and Flutter.",
      servicesPara2: "From rapid MVP prototyping to enterprise-scale refactoring, our engineering practices ensure clean architecture, 99.9% uptime, and frictionless user experiences.",
      servicesImg1: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      servicesImg2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'/></svg>",
      sort: "1",
      status: true,
      capabilities: [
        { label: "React & Next.js Web Apps" },
        { label: "Node.js & GraphQL Backends" },
        { label: "iOS & Android Native/Cross-Platform" },
        { label: "Microservices Architecture" },
      ],
      expert: [
        { value: teamMembers[1]._id.toString(), label: teamMembers[1].memberName },
        { value: teamMembers[0]._id.toString(), label: teamMembers[0].memberName },
      ],
      seo: {
        metaTitle: "Full-Stack Web & Mobile Development Services | PulsePlay",
        metaDescription: "Enterprise full-stack development, modern frontend frameworks, and robust API microservices.",
        keyword: ["Web Development", "Mobile Apps", "React", "Node.js", "GraphQL"],
      },
      createdAt: new Date("2023-02-01").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      servicesName: "AI, Machine Learning & Automation",
      slug: "ai-machine-learning-automation",
      servicesCode: "AI-02",
      services: "AI & Cognitive Computing",
      servicesAvatar: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
      servicesCover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      servicesVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      servicesHeading: "Unlock Intelligence Across Your Business",
      servicesHeading1: "LLM Agents, Fine-Tuning & Computer Vision",
      servicesHeading2: "Automated Decision Pipelines",
      servicesPara1: "Transform unstructured enterprise data into real-time actionable insights with bespoke Generative AI agents and predictive machine learning models.",
      servicesPara2: "We deploy secure, privacy-compliant AI systems with vector search, semantic embeddings, and automated workflow triggers.",
      servicesImg1: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
      servicesImg2: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>",
      sort: "2",
      status: true,
      capabilities: [
        { label: "Custom LLM Orchestration" },
        { label: "Vector Search & RAG Systems" },
        { label: "Computer Vision & Face Recognition" },
        { label: "Intelligent Process Automation" },
      ],
      expert: [
        { value: teamMembers[5]._id.toString(), label: teamMembers[5].memberName },
      ],
      seo: {
        metaTitle: "Enterprise AI & Machine Learning Services | PulsePlay",
        metaDescription: "Accelerate your AI roadmap with production LLMs, cognitive agents, and custom computer vision pipelines.",
        keyword: ["AI Services", "Machine Learning", "LLM", "RAG", "Automation"],
      },
      createdAt: new Date("2023-02-02").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      servicesName: "UI/UX & Product Design Systems",
      slug: "ui-ux-product-design-systems",
      servicesCode: "DES-03",
      services: "Product & Experience Design",
      servicesAvatar: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
      servicesCover: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
      servicesVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      servicesHeading: "Experiences That Delight and Convert",
      servicesHeading1: "Human-Centered Design Strategy",
      servicesHeading2: "Unified Enterprise Design Systems",
      servicesPara1: "We create intuitive, elegant, and frictionless digital products grounded in comprehensive user research, rapid prototyping, and pixel-perfect design.",
      servicesPara2: "Our design systems eliminate technical and visual debt, ensuring complete consistency across multi-platform web, desktop, and mobile products.",
      servicesImg1: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
      servicesImg2: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'/></svg>",
      sort: "3",
      status: true,
      capabilities: [
        { label: "Product UX/UI Research & Wireframing" },
        { label: "Design Systems & Token Architecture" },
        { label: "Interactive Motion & Prototyping" },
        { label: "Accessibility & WCAG 2.1 Compliance" },
      ],
      expert: [
        { value: teamMembers[2]._id.toString(), label: teamMembers[2].memberName },
      ],
      seo: {
        metaTitle: "UI/UX & Product Design Services | PulsePlay",
        metaDescription: "Award-winning UX/UI design, interactive prototypes, and scalable component design systems.",
        keyword: ["UI UX Design", "Design Systems", "Figma", "Product Design"],
      },
      createdAt: new Date("2023-02-03").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      servicesName: "Cloud DevOps & Infrastructure Reliability",
      slug: "cloud-devops-infrastructure-reliability",
      servicesCode: "OPS-04",
      services: "Cloud & Site Reliability",
      servicesAvatar: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      servicesCover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
      servicesVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      servicesHeading: "Zero-Downtime Multi-Region Cloud Infrastructure",
      servicesHeading1: "Infrastructure as Code & CI/CD Pipelines",
      servicesHeading2: "Continuous Monitoring & Disaster Recovery",
      servicesPara1: "We engineer resilient cloud environments on AWS, Google Cloud, and Azure using Kubernetes, Terraform, and automated security guardrails.",
      servicesPara2: "Our DevOps frameworks cut deployment cycles from weeks to minutes while optimizing cloud costs by up to 35%.",
      servicesImg1: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
      servicesImg2: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'/></svg>",
      sort: "4",
      status: true,
      capabilities: [
        { label: "Kubernetes Orchestration" },
        { label: "Terraform Infrastructure as Code" },
        { label: "Automated CI/CD Workflows" },
        { label: "24/7 SRE Monitoring & Disaster Recovery" },
      ],
      expert: [
        { value: teamMembers[4]._id.toString(), label: teamMembers[4].memberName },
      ],
      seo: {
        metaTitle: "Cloud DevOps & Site Reliability Services | PulsePlay",
        metaDescription: "Enterprise Kubernetes, Terraform infrastructure automation, and 24/7 cloud reliability engineering.",
        keyword: ["DevOps", "Kubernetes", "AWS", "Terraform", "Cloud Infrastructure"],
      },
      createdAt: new Date("2023-02-04").toISOString(),
      updatedBy: users[0]._id,
    },
  ]);

  // 7. Solutions
  console.log("💡 [7/18] Seeding Solutions...");
  const solutions = await Solutions.insertMany([
    {
      solutionsName: "Enterprise Digital Core Transformation",
      slug: "enterprise-digital-core-transformation",
      colorCode: "#3B82F6",
      sort: "1",
      solutionsAvatar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      solutionsCover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/></svg>",
      solutionsHeading: "Modernize Legacy Systems without Operational Disruption",
      solutionsHeading1: "Agile Architecture for Global Enterprises",
      solutionsPara1: "We help enterprises migrate from brittle legacy architectures into modular, cloud-native digital ecosystems that unlock agility and innovation.",
      solutionsImg1: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
      solutionsImg2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      paraList: [
        { label: "Decouple legacy databases with GraphQL data meshes" },
        { label: "Accelerate release cadence from quarterly to daily" },
        { label: "Ensure continuous enterprise compliance and security" },
      ],
      list: [
        {
          logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=80",
          head: "Unified Data Layer",
          para: "Aggregate CRM, ERP, and transactional databases into a unified real-time GraphQL API.",
        },
        {
          logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&auto=format&fit=crop&q=80",
          head: "Cloud Scale Migration",
          para: "Phased zero-downtime migration pipelines that de-risk mission-critical core processes.",
        },
      ],
      seo: {
        metaTitle: "Enterprise Digital Core Transformation Solution | PulsePlay",
        metaDescription: "Modernize legacy systems, streamline digital operations, and scale with cloud architecture.",
        keyword: ["Enterprise Transformation", "Legacy Modernization", "Cloud Migration"],
      },
      status: true,
      createdAt: new Date("2023-03-01").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      solutionsName: "Next-Gen Intelligent E-Commerce",
      slug: "next-gen-intelligent-ecommerce",
      colorCode: "#10B981",
      sort: "2",
      solutionsAvatar: "https://images.unsplash.com/photo-1556742049-0a67e557224f?w=800&auto=format&fit=crop&q=80",
      solutionsCover: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'/></svg>",
      solutionsHeading: "Headless Commerce Powered by Real-Time Personalization",
      solutionsHeading1: "Sub-Second Page Loads, Maximum Conversion",
      solutionsPara1: "Drive higher conversion rates and customer loyalty with composable headless commerce engines integrated with AI product recommendations.",
      solutionsImg1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      solutionsImg2: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop&q=80",
      paraList: [
        { label: "Headless storefronts with instant edge caching" },
        { label: "AI search with semantic intent matching" },
        { label: "Omnichannel inventory sync and checkout" },
      ],
      list: [
        {
          logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=80",
          head: "Composable Architecture",
          para: "Best-of-breed modular checkout, payment gateways, and CRM integrations.",
        },
        {
          logo: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=200&auto=format&fit=crop&q=80",
          head: "AI Recommendation Engine",
          para: "Boost average order value by 28% with predictive dynamic product recommendations.",
        },
      ],
      seo: {
        metaTitle: "Headless Intelligent E-Commerce Solution | PulsePlay",
        metaDescription: "Scalable headless commerce solutions with edge delivery and AI-driven personalization.",
        keyword: ["Headless Commerce", "E-Commerce", "Shopify Plus", "AI Personalization"],
      },
      status: true,
      createdAt: new Date("2023-03-02").toISOString(),
      updatedBy: users[0]._id,
    },
  ]);

  // 8. Work (Portfolio Case Studies)
  console.log("💼 [8/18] Seeding Work / Client Case Studies...");
  const workItems = await Work.insertMany([
    {
      projectName: "FinFlow: Next-Gen Global Banking Suite",
      slug: "finflow-global-banking-suite",
      location: "New York, USA",
      year: "2024",
      sort: 1,
      clientColorTheme: "#0F172A",
      projectLogo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&auto=format&fit=crop&q=80",
      projectLogoTransparent: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&auto=format&fit=crop&q=80",
      clientCover: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80",
      projectCover: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
      sliderImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80",
      testimonialImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      landingDescription: "A multi-currency digital banking platform engineered for 5M+ international users with real-time settlement.",
      projectDescription: "PulsePlay partnered with FinFlow to re-architect their consumer and institutional payment rails. We delivered an ultra-responsive React Native mobile app and a resilient Go microservices backend processing $100M+ daily.",
      areas: "FinTech & Digital Payments",
      projectIndustry: [{ value: "FinTech", label: "FinTech & Banking" }],
      services: [
        { value: services[0]._id.toString(), label: "Full-Stack Web & Mobile Engineering" },
        { value: services[2]._id.toString(), label: "UI/UX & Product Design Systems" },
      ],
      employeeWork: [
        { value: teamMembers[0]._id.toString(), label: teamMembers[0].memberName },
        { value: teamMembers[1]._id.toString(), label: teamMembers[1].memberName },
        { value: teamMembers[2]._id.toString(), label: teamMembers[2].memberName },
      ],
      area: [{ label: "Mobile Banking App" }, { label: "Payment Settlement Engine" }, { label: "Fraud Detection" }],
      tools: [{ label: "React Native" }, { label: "Node.js" }, { label: "GraphQL" }, { label: "PostgreSQL" }, { label: "AWS" }],
      branding: {
        branding: "FinFlow Brand Identity",
        taglines: "Instant Global Money, Effortlessly.",
        singleWord: "Flow",
      },
      website: {
        website: true,
        websiteUrl: "https://finflow.example.com",
        websiteImgLeft: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
        websiteImgRight: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80",
      },
      outcomes: {
        outcomes: true,
        list: [
          { title: "5M+", label: "Active Mobile Users" },
          { title: "99.999%", label: "Transaction Uptime" },
          { title: "< 250ms", label: "Payment Settlement Time" },
        ],
      },
      seo: {
        metaTitle: "FinFlow Global Banking Case Study | PulsePlay",
        metaDescription: "How PulsePlay engineered a scalable multi-currency banking platform processing $100M+ daily.",
        keyword: ["FinTech", "Banking App", "Case Study", "React Native"],
      },
      status: true,
      createdAt: new Date("2024-01-15").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      projectName: "MediSync: AI Health Diagnostics & Telemedicine",
      slug: "medisync-ai-health-diagnostics",
      location: "San Francisco, USA",
      year: "2024",
      sort: 2,
      clientColorTheme: "#0284C7",
      projectLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&auto=format&fit=crop&q=80",
      projectLogoTransparent: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&auto=format&fit=crop&q=80",
      clientCover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
      projectCover: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80",
      sliderImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
      testimonialImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      landingDescription: "HIPAA-compliant telemedicine platform with AI-assisted clinical triaging and real-time vital monitoring.",
      projectDescription: "MediSync collaborated with PulsePlay to develop an end-to-end patient care portal featuring encrypted WebRTC video calls, electronic health record (EHR) sync, and AI clinical summaries.",
      areas: "HealthTech & Telehealth",
      projectIndustry: [{ value: "HealthTech", label: "HealthTech & Medical" }],
      services: [
        { value: services[0]._id.toString(), label: "Full-Stack Web & Mobile Engineering" },
        { value: services[1]._id.toString(), label: "AI, Machine Learning & Automation" },
      ],
      employeeWork: [
        { value: teamMembers[1]._id.toString(), label: teamMembers[1].memberName },
        { value: teamMembers[5]._id.toString(), label: teamMembers[5].memberName },
      ],
      area: [{ label: "Telehealth Video Suite" }, { label: "AI Clinical Summary Engine" }, { label: "HIPAA Security Architecture" }],
      tools: [{ label: "WebRTC" }, { label: "Next.js" }, { label: "Python/FastAPI" }, { label: "TensorFlow" }],
      branding: {
        branding: "MediSync Healthcare",
        taglines: "Care at the Speed of Life.",
        singleWord: "Healing",
      },
      website: {
        website: true,
        websiteUrl: "https://medisync.example.com",
        websiteImgLeft: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
        websiteImgRight: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
      },
      outcomes: {
        outcomes: true,
        list: [
          { title: "2.5M+", label: "Consultations Completed" },
          { title: "60%", label: "Faster Doctor Triaging" },
          { title: "100%", label: "HIPAA & GDPR Compliant" },
        ],
      },
      seo: {
        metaTitle: "MediSync AI HealthTech Case Study | PulsePlay",
        metaDescription: "Building a HIPAA-compliant telemedicine platform with AI clinical assistance.",
        keyword: ["HealthTech", "Telemedicine", "AI Diagnostics", "WebRTC"],
      },
      status: true,
      createdAt: new Date("2024-02-10").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      projectName: "AeroLogistics: Global Autonomous Supply Chain",
      slug: "aerologistics-global-supply-chain",
      location: "Frankfurt, Germany",
      year: "2023",
      sort: 3,
      clientColorTheme: "#1E293B",
      projectLogo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80",
      projectLogoTransparent: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80",
      clientCover: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
      projectCover: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop&q=80",
      sliderImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
      testimonialImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      landingDescription: "Real-time IoT telemetry and route optimization across 15,000 intermodal shipping fleets.",
      projectDescription: "AeroLogistics trusted PulsePlay to deliver real-time asset tracking and predictive route dispatching using IoT edge streaming and geospatial microservices.",
      areas: "Supply Chain & Logistics",
      projectIndustry: [{ value: "Logistics", label: "Logistics & Supply Chain" }],
      services: [
        { value: services[0]._id.toString(), label: "Full-Stack Web & Mobile Engineering" },
        { value: services[3]._id.toString(), label: "Cloud DevOps & Infrastructure Reliability" },
      ],
      employeeWork: [
        { value: teamMembers[1]._id.toString(), label: teamMembers[1].memberName },
        { value: teamMembers[4]._id.toString(), label: teamMembers[4].memberName },
      ],
      area: [{ label: "IoT Fleet Telemetry" }, { label: "Predictive Route Dispatch" }, { label: "Driver Mobile App" }],
      tools: [{ label: "Kafka" }, { label: "Go" }, { label: "React" }, { label: "TimescaleDB" }],
      branding: {
        branding: "AeroLogistics Global",
        taglines: "Precision Delivery Worldwide.",
        singleWord: "Motion",
      },
      website: {
        website: true,
        websiteUrl: "https://aerologistics.example.com",
        websiteImgLeft: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
        websiteImgRight: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&auto=format&fit=crop&q=80",
      },
      outcomes: {
        outcomes: true,
        list: [
          { title: "15,000+", label: "Connected Fleets" },
          { title: "22%", label: "Fuel Cost Savings" },
          { title: "99.8%", label: "On-Time Delivery Rate" },
        ],
      },
      seo: {
        metaTitle: "AeroLogistics Supply Chain Case Study | PulsePlay",
        metaDescription: "Discover how PulsePlay built real-time IoT fleet telemetry for AeroLogistics.",
        keyword: ["Logistics", "IoT", "Supply Chain", "Kafka"],
      },
      status: true,
      createdAt: new Date("2023-11-20").toISOString(),
      updatedBy: users[0]._id,
    },
  ]);

  // 9. Home Featured Work
  console.log("🏠 [9/18] Seeding Home Page Works...");
  await Home.insertMany([
    {
      work: workItems[0]._id,
      image: workItems[0].clientCover,
      url: `/work/${workItems[0].slug}`,
      sort: 1,
      color: workItems[0].clientColorTheme,
    },
    {
      work: workItems[1]._id,
      image: workItems[1].clientCover,
      url: `/work/${workItems[1].slug}`,
      sort: 2,
      color: workItems[1].clientColorTheme,
    },
    {
      work: workItems[2]._id,
      image: workItems[2].clientCover,
      url: `/work/${workItems[2].slug}`,
      sort: 3,
      color: workItems[2].clientColorTheme,
    },
  ]);

  // 10. KPIs
  console.log("📊 [10/18] Seeding KPIs...");
  await KPI.insertMany([
    {
      title: "99.99%",
      description: "Cloud Uptime & Reliability SLA",
      sort: 1,
      color: "#3B82F6",
    },
    {
      title: "500+",
      description: "Digital Products Delivered Globally",
      sort: 2,
      color: "#10B981",
    },
    {
      title: "10M+",
      description: "Daily End Users Empowered",
      sort: 3,
      color: "#F59E0B",
    },
    {
      title: "45%",
      description: "Average Time-to-Market Reduction",
      sort: 4,
      color: "#8B5CF6",
    },
  ]);

  // 11. Outcomes & Capabilities
  console.log("🎯 [11/18] Seeding Outcomes & Capabilities...");
  await Outcomes.insertMany([
    {
      title: "Unrivaled Engineering Velocity",
      para: "Our cross-functional squads leverage automated CI/CD and modular architectures to ship production code 3x faster.",
      createdAt: new Date("2023-01-01").toISOString(),
    },
    {
      title: "Zero-Downtime Scalability",
      para: "Engineered from day one to handle exponential traffic surges with sub-millisecond API response times.",
      createdAt: new Date("2023-01-02").toISOString(),
    },
    {
      title: "Measurable Business ROI",
      para: "We align engineering execution directly with customer retention, conversion lift, and operating margins.",
      createdAt: new Date("2023-01-03").toISOString(),
    },
  ]);

  await Capabilities.insertMany([
    {
      capabilitiesTitle: "Core Technology Capabilities",
      capabilitiesDescription: "State-of-the-art software capabilities across frontend, backend, cloud, and AI.",
      capabilitiesList: [
        { value: "React & Next.js Ecosystem", avatar: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&auto=format&fit=crop&q=80" },
        { value: "GraphQL & High-Throughput APIs", avatar: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&auto=format&fit=crop&q=80" },
        { value: "Kubernetes & Cloud Native Mesh", avatar: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&auto=format&fit=crop&q=80" },
        { value: "Generative AI & LLM Systems", avatar: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=200&auto=format&fit=crop&q=80" },
      ],
      createdAt: new Date("2023-01-01").toISOString(),
    },
  ]);

  // 12. Products
  console.log("🚀 [12/18] Seeding SaaS Products...");
  await Products.insertMany([
    {
      productName: "PulseCMS",
      slug: "pulsecms",
      status: true,
      heroSection: {
        title: "The Headless CMS for Modern High-Growth Teams",
        paragraph: "Blazing fast GraphQL API, granular role-based permissions, automated SEO management, and visual content orchestration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      },
      keyFeatures: [
        {
          title: "Omnichannel GraphQL Content Mesh",
          paragraph: "Serve dynamic structured content to web, iOS, Android, and IoT screens from a single source of truth.",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/></svg>",
        },
        {
          title: "AI-Powered SEO & Copy Generation",
          paragraph: "Instantly optimize meta tags, generate summaries, and localize content in 40+ languages.",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>",
        },
      ],
      para: "Built for developers who value performance and marketers who value autonomy.",
      para2: "Enterprise security with SOC-2 compliant audit trails and role-based access control.",
      image: {
        laptop: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        dashBoard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        mobile: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=80",
      },
      experts: [teamMembers[0]._id, teamMembers[1]._id],
      seo: {
        metaTitle: "PulseCMS - Enterprise Headless CMS | PulsePlay",
        metaDescription: "Scalable headless CMS with GraphQL API, automated SEO, and granular permissions.",
        keyword: ["Headless CMS", "PulseCMS", "GraphQL CMS"],
      },
      updatedBy: users[0]._id,
    },
    {
      productName: "PulseFlow AI",
      slug: "pulseflow-ai",
      status: true,
      heroSection: {
        title: "Autonomous Workflow Intelligence Engine",
        paragraph: "Automate complex enterprise data operations with collaborative AI agents and deterministic toolchains.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      },
      keyFeatures: [
        {
          title: "Deterministic Agent Chains",
          paragraph: "Guaranteed structured outputs and strict schema validation for critical enterprise pipelines.",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/></svg>",
        },
      ],
      para: "Empowering non-technical teams to build automated AI pipelines safely.",
      para2: "Seamless connectors for PostgreSQL, Snowflake, Salesforce, and Slack.",
      image: {
        laptop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        dashBoard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        mobile: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=80",
      },
      experts: [teamMembers[5]._id],
      seo: {
        metaTitle: "PulseFlow AI - Workflow Automation Engine | PulsePlay",
        metaDescription: "Build deterministic AI workflow agents for enterprise data operations.",
        keyword: ["AI Agents", "Workflow Automation", "LLM Pipelines"],
      },
      updatedBy: users[0]._id,
    },
  ]);

  // 13. News & News Categories
  console.log("📰 [13/18] Seeding News & Press Releases...");
  const newsCategory = await NewsCategory.insertMany([
    { categoryName: "Company News", createdAt: new Date("2023-01-01").toISOString() },
    { categoryName: "Product Launch", createdAt: new Date("2023-01-02").toISOString() },
    { categoryName: "Awards & Recognition", createdAt: new Date("2023-01-03").toISOString() },
  ]);

  await News.insertMany([
    {
      newsTitle: "PulsePlay Digital Recognized as Top Global Digital Agency 2025",
      slug: "pulseplay-top-global-digital-agency-2025",
      newsSubTitle: "Honored for excellence in cloud architecture, AI engineering, and human-centered design.",
      newsAuthor: "Alex Morgan",
      newsAvatar: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
      category: [{ value: newsCategory[2]._id.toString(), label: "Awards & Recognition" }],
      newstags: [{ value: "Award" }, { value: "Agency" }, { value: "Innovation" }],
      newsDescription: "We are thrilled to be named a Global Digital Leader by Enterprise Tech Review.",
      newsDescriptionHtml: "<p>This recognition reflects the dedication, creativity, and technical rigor of our global team.</p>",
      publish: true,
      seo: {
        metaTitle: "PulsePlay Named Top Global Digital Agency 2025 | News",
        metaDescription: "PulsePlay Digital honored for exceptional delivery in cloud and AI digital transformation.",
        keyword: ["Agency News", "Global Leader", "Award"],
      },
      createdAt: new Date("2025-01-10").toISOString(),
    },
    {
      newsTitle: "PulsePlay Launches Next-Gen AI Agent Platform PulseFlow",
      slug: "pulseplay-launches-next-gen-ai-platform-pulseflow",
      newsSubTitle: "Empowering enterprise operations with autonomous reasoning agents.",
      newsAuthor: "Priya Sharma",
      newsAvatar: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
      category: [{ value: newsCategory[1]._id.toString(), label: "Product Launch" }],
      newstags: [{ value: "AI" }, { value: "ProductLaunch" }],
      newsDescription: "PulseFlow brings deterministic agentic reasoning to production cloud software.",
      newsDescriptionHtml: "<p>Discover how PulseFlow is transforming operations for leading global enterprises.</p>",
      publish: true,
      seo: {
        metaTitle: "PulsePlay Launches PulseFlow AI Platform | News",
        metaDescription: "Announcing PulseFlow: Autonomous enterprise reasoning engine by PulsePlay.",
        keyword: ["Product Launch", "PulseFlow", "AI Platform"],
      },
      createdAt: new Date("2025-02-15").toISOString(),
    },
  ]);

  // 14. Resources (Whitepapers, Guides, Topics)
  console.log("📚 [14/18] Seeding Resources & Topics...");
  const resourceTopics = await ResourcesTopic.insertMany([
    { title: "Cloud Architecture", label: "Cloud Architecture" },
    { title: "Generative AI", label: "Generative AI" },
    { title: "Design Systems", label: "Design Systems" },
  ]);

  const resourceTypes = await ResourcesTypes.insertMany([
    { title: "Whitepaper", label: "Whitepaper" },
    { title: "Case Study", label: "Case Study" },
    { title: "Engineering Guide", label: "Engineering Guide" },
  ]);

  await Resources.insertMany([
    {
      title: "The Enterprise Guide to Cloud Migration & Microservices Mesh",
      slug: "enterprise-guide-cloud-migration-microservices",
      contentTypes: [{ value: resourceTypes[0]._id.toString(), label: "Whitepaper" }],
      topics: [{ value: resourceTopics[0]._id.toString(), label: "Cloud Architecture" }],
      sortDescription: "A comprehensive 40-page architectural blueprint for de-risking enterprise legacy migrations.",
      reportDescription: "Learn proven patterns for phased database decoupling, zero-downtime traffic cutovers, and Kubernetes SRE practices.",
      reportImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      reportAvatar: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
      reportPdf: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/whitepapers/cloud-migration-guide.pdf",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      status: true,
      sort: "1",
      createdAt: new Date("2024-03-01").toISOString(),
    },
    {
      title: "Building Production-Grade LLM Toolchains with Deterministic Guardrails",
      slug: "building-production-grade-llm-toolchains",
      contentTypes: [{ value: resourceTypes[2]._id.toString(), label: "Engineering Guide" }],
      topics: [{ value: resourceTopics[1]._id.toString(), label: "Generative AI" }],
      sortDescription: "Practical guide to evaluating, testing, and securing autonomous AI agent pipelines.",
      reportDescription: "Deep dive into schema validation, prompt regression testing, and token cost optimization at scale.",
      reportImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      reportAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80",
      reportPdf: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/whitepapers/llm-guardrails-guide.pdf",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      status: true,
      sort: "2",
      createdAt: new Date("2024-04-10").toISOString(),
    },
  ]);

  // 15. Careers & Job Applications
  console.log("💼 [15/18] Seeding Careers & Open Positions...");
  const careers = await Carrer.insertMany([
    {
      carrer: "Senior Full Stack Engineer (React, Node, GraphQL)",
      slug: "senior-full-stack-engineer",
      carrerVaccancy: "3",
      carrerVancy: "Full-time",
      carrerCategory: "Engineering",
      carrerLocation: "Remote (Global) / San Francisco",
      experience: "5+ years",
      carrerDescription: "We are looking for a Senior Full Stack Engineer with deep expertise in React, TypeScript, GraphQL, and microservices architecture.",
      employeLink: teamMembers[1]._id,
      seo: {
        metaTitle: "Senior Full Stack Engineer Career | PulsePlay Digital",
        metaDescription: "Join PulsePlay Digital as a Senior Full Stack Engineer building high-scale digital products.",
        keyword: ["Engineering Jobs", "React", "GraphQL", "Node.js"],
      },
      createdAt: new Date("2024-01-05").toISOString(),
    },
    {
      carrer: "Lead AI / ML Systems Engineer",
      slug: "lead-ai-ml-systems-engineer",
      carrerVaccancy: "2",
      carrerVancy: "Full-time",
      carrerCategory: "AI Research",
      carrerLocation: "San Francisco, CA / Hybrid",
      experience: "4+ years",
      carrerDescription: "Lead the development of production-grade LLM agents, vector retrieval pipelines, and cognitive computing architectures.",
      employeLink: teamMembers[5]._id,
      seo: {
        metaTitle: "Lead AI / ML Engineer Career | PulsePlay Digital",
        metaDescription: "Shape the future of enterprise AI systems with PulsePlay Digital.",
        keyword: ["AI Jobs", "Machine Learning", "LLM", "Python"],
      },
      createdAt: new Date("2024-01-10").toISOString(),
    },
    {
      carrer: "Principal Product Designer (UX/UI & Systems)",
      slug: "principal-product-designer",
      carrerVaccancy: "1",
      carrerVancy: "Full-time",
      carrerCategory: "Design",
      carrerLocation: "New York / Remote",
      experience: "6+ years",
      carrerDescription: "Own the design strategy, interaction paradigms, and design systems for flagship web and mobile applications.",
      employeLink: teamMembers[2]._id,
      seo: {
        metaTitle: "Principal Product Designer Career | PulsePlay Digital",
        metaDescription: "Lead digital product design and design systems at PulsePlay Digital.",
        keyword: ["Design Jobs", "UI/UX", "Product Design", "Figma"],
      },
      createdAt: new Date("2024-01-15").toISOString(),
    },
  ]);

  // Career Form Applications
  await CareerForm.insertMany([
    {
      candidateName: "Michael Chang",
      candidateEmail: "michael.chang@example.com",
      candidatePhone: "+1 (555) 789-4321",
      candidateMessage: "I have 6 years building high-throughput GraphQL APIs and React design systems. Excited by PulsePlay's engineering excellence!",
      candidatePosition: "Senior Full Stack Engineer",
      candidateCv: "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/resumes/michael-chang-cv.pdf",
      state: "California",
      jobTitle: { id: careers[0]._id, carrerTitle: careers[0]._id },
      referrer: {
        referrerName: "Sophia Chen",
        referrerEmail: "sophia.chen@pulseplaydigital.com",
      },
      createdAt: new Date("2024-02-01").toISOString(),
    },
  ]);

  // 16. Testimonials, Awards & Advisors
  console.log("🏆 [16/18] Seeding Testimonials, Awards & Advisors...");
  await Testimonial.insertMany([
    {
      testimonialName: "Sarah Jenkins",
      testimoniaDesignation: "Chief Digital Officer, FinFlow Global",
      testimonialDescription: "PulsePlay delivered our core banking suite 2 months ahead of schedule. Their technical rigor and UI craftsmanship are unmatched.",
      testimonialImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
      slug: "sarah-jenkins-finflow",
      sort: 1,
      status: true,
      caseStudies: { value: workItems[0]._id.toString(), label: "FinFlow Global Banking Suite" },
      createdAt: new Date("2024-02-01").toISOString(),
      updatedBy: users[0]._id,
    },
    {
      testimonialName: "Dr. Arthur Bradley",
      testimoniaDesignation: "Head of Medical Informatics, MediSync",
      testimonialDescription: "The AI diagnostics triaging engine built by PulsePlay reduced patient wait times by over 60% while maintaining absolute compliance.",
      testimonialImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
      slug: "dr-arthur-bradley-medisync",
      sort: 2,
      status: true,
      caseStudies: { value: workItems[1]._id.toString(), label: "MediSync AI Health Diagnostics" },
      createdAt: new Date("2024-03-01").toISOString(),
      updatedBy: users[0]._id,
    },
  ]);

  await Awards.insertMany([
    {
      title: "Webby Award Winner - Best Enterprise User Experience",
      slug: "webby-award-winner-best-enterprise-ux-2024",
      location: "New York, USA",
      decription: "Awarded for exceptional design execution, accessibility, and high performance in enterprise software.",
      date: "May 2024",
      status: true,
      img: [
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&auto=format&fit=crop&q=80",
      ],
      updatedBy: users[0]._id,
    },
    {
      title: "Awwwards Site of the Month - Digital Innovation",
      slug: "awwwards-site-of-the-month-digital-innovation-2024",
      location: "London, UK",
      decription: "Recognized for bleeding-edge WebGL interactions and fluid mobile responsiveness.",
      date: "October 2024",
      status: true,
      img: [
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
      ],
      updatedBy: users[0]._id,
    },
  ]);

  await Adviser.insertMany([
    {
      name: "Dr. Richard Thorne",
      slug: "dr-richard-thorne",
      designation: "Former VP Engineering, CloudScale & Venture Partner",
      about: "Richard advises PulsePlay on distributed systems architecture, enterprise go-to-market, and strategic cloud alliances.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
      status: true,
      social: {
        linkedin: "https://linkedin.com/in/richardthorne",
        twitter: "https://twitter.com/richardthorne",
      },
      updatedBy: users[0]._id,
    },
    {
      name: "Victoria Sterling",
      slug: "victoria-sterling",
      designation: "Managing Director, Sterling Growth Capital",
      about: "Victoria brings 20+ years of FinTech investment and digital transformation board advisory expertise.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
      status: true,
      social: {
        linkedin: "https://linkedin.com/in/victoriasterling",
      },
      updatedBy: users[0]._id,
    },
  ]);

  // 17. Brands & Architecture
  console.log("🏢 [17/18] Seeding Brands & Inquiries...");
  await Brand.insertMany([
    {
      title: "FinFlow Global",
      para: "Leading global digital banking platform",
      avatar: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&auto=format&fit=crop&q=80",
      url: "https://finflow.example.com",
      createdAt: new Date("2023-01-01").toISOString(),
    },
    {
      title: "MediSync Health",
      para: "Next-gen telehealth & AI triage",
      avatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&auto=format&fit=crop&q=80",
      url: "https://medisync.example.com",
      createdAt: new Date("2023-01-02").toISOString(),
    },
    {
      title: "AeroLogistics",
      para: "Autonomous supply chain fleet management",
      avatar: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&auto=format&fit=crop&q=80",
      url: "https://aerologistics.example.com",
      createdAt: new Date("2023-01-03").toISOString(),
    },
  ]);

  await BrandArch.insertMany([
    { title: "AWS Advanced Consulting Partner", url: "https://aws.amazon.com", createdAt: new Date("2023-01-01").toISOString() },
    { title: "Google Cloud Premier Partner", url: "https://cloud.google.com", createdAt: new Date("2023-01-02").toISOString() },
  ]);

  await Contactus.insertMany([
    {
      name: "Marcus Aurelius",
      email: "marcus@enterprise.co",
      phone: "+1 (555) 987-6543",
      organization: "Enterprise Global Corp",
      services: "Full-Stack Web & Mobile Engineering",
      solutions: "Enterprise Digital Core Transformation",
      message: "We are planning a comprehensive cloud core modernization in Q3. Looking to partner with PulsePlay for end-to-end architecture and execution.",
      createdAt: new Date("2024-02-15").toISOString(),
    },
  ]);

  await HireUsForm.insertMany([
    {
      name: "Jessica Alba",
      email: "jessica@innovate.io",
      phone: "+1 (555) 123-4567",
      service: "AI, Machine Learning & Automation",
      skill: "LLM Agents & Computer Vision",
      message: "Looking for an expert team to build our proprietary autonomous medical document processor.",
      createdAt: new Date("2024-02-18").toISOString(),
    },
  ]);

  await NewsLetter.insertMany([
    { email: "subscriber1@techdigest.com" },
    { email: "subscriber2@cloudweekly.io" },
    { email: "subscriber3@designvision.co" },
  ]);

  // 18. SEO Pages & Notifications
  console.log("🌐 [18/18] Seeding SEO Pages & Dashboard Notifications...");
  await SeoPages.insertMany([
    {
      name: "Home",
      seo: {
        metaTitle: "PulsePlay Digital | Global Product Engineering & AI Transformation",
        metaDescription: "We build category-defining web applications, cloud architectures, and autonomous AI agents for high-growth enterprises.",
        keyword: ["Digital Agency", "Full-Stack Development", "AI Engineering", "Cloud Architecture"],
      },
    },
    {
      name: "About Us",
      seo: {
        metaTitle: "About Us | PulsePlay Digital",
        metaDescription: "Meet our global team of visionary architects, product designers, and AI engineers.",
        keyword: ["About PulsePlay", "Leadership", "Team"],
      },
    },
    {
      name: "Services",
      seo: {
        metaTitle: "Our Services | PulsePlay Digital",
        metaDescription: "Explore our digital product engineering, AI development, and cloud SRE capabilities.",
        keyword: ["Services", "Web Development", "AI", "Cloud"],
      },
    },
  ]);

  await Notification.insertMany([
    {
      notificationType: "System",
      notification: ["Database successfully initialized with verified production seed data."],
      createdAt: new Date().toISOString(),
    },
    {
      notificationType: "Inquiry",
      notification: ["New partnership inquiry received from Enterprise Global Corp."],
      createdAt: new Date().toISOString(),
    },
  ]);

  console.log("\n=======================================================");
  console.log("🎉 [Seed] SEEDING COMPLETED SUCCESSFULLY!");
  console.log("=======================================================");
  console.log("📊 Summary of Created Records:");
  console.log(`   - Team Categories  : ${teamCategories.length}`);
  console.log(`   - Team Members     : ${teamMembers.length}`);
  console.log(`   - Users (Admins)   : ${users.length}`);
  console.log(`   - Blog Categories  : ${blogCategories.length}`);
  console.log(`   - Blogs            : ${blogs.length}`);
  console.log(`   - Comments         : ${comments.length}`);
  console.log(`   - Services         : ${services.length}`);
  console.log(`   - Solutions        : ${solutions.length}`);
  console.log(`   - Work (Projects)  : ${workItems.length}`);
  console.log(`   - Products         : 2`);
  console.log(`   - Careers          : ${careers.length}`);
  console.log(`   - Testimonials     : 2`);
  console.log(`   - Awards           : 2`);
  console.log(`   - Advisors         : 2`);
  console.log("-------------------------------------------------------");
  console.log("🔑 Default Login Credentials:");
  console.log("   - Super Admin : admin@pulseplaydigital.com / admin123");
  console.log("   - Editor      : editor@pulseplaydigital.com / editor123");
  console.log("=======================================================\n");

  await mongoose.disconnect();
  console.log("🔌 MongoDB disconnected.");
  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error("❌ [Seed] Error seeding database:", err);
  process.exit(1);
});