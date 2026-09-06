import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const bcrypt = require("bcryptjs");
import { User } from "./models/User";
import { TeamMember } from "./models/teamMember";

const seed = async () => {
  const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pulseplay";
  await mongoose.connect(mongoURI);
  console.log("Connected to MongoDB for seeding...");

  const adminEmail = "admin@pulseplaydigital.com";
  const existingUser = await User.findOne({ email: adminEmail });

  if (existingUser) {
    console.log("Admin user already exists:", adminEmail);
    process.exit(0);
  }

  const member = new TeamMember({
    memberName: "Admin User",
    email: adminEmail,
    memberPersonalEmail: adminEmail,
    memberPhone: "1234567890",
    memberDesignation: "Administrator",
    status: true,
    enabled: true,
    createdAt: new Date().toISOString()
  });

  const savedMember = await member.save();

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const user = new User({
    username: "admin",
    password: hashedPassword,
    email: adminEmail,
    member: savedMember._id,
    role: "admin",
    createdAt: new Date().toISOString()
  });

  await user.save();
  console.log("✅ Admin user created successfully!");
  console.log(`Email: ${adminEmail}`);
  console.log(`Password: admin123`);
  process.exit(0);
};

seed().catch(err => {
  console.error("Seeding error:", err);
  process.exit(1);
});
