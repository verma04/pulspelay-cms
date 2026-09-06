import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pulseplay";
    
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 3000,
        });
        console.log('MongoDB Connected to local/specified database...');
    } catch (err: any) {
        console.warn('⚠️ Local MongoDB connection failed:', err.message || err);
        console.log('🚀 Starting in-memory MongoDB fallback...');
        try {
            const mongod = await MongoMemoryServer.create();
            const memoryUri = mongod.getUri();
            await mongoose.connect(memoryUri);
            console.log('✅ In-memory MongoDB started and connected successfully!');
        } catch (memErr) {
            console.error('❌ Failed to start MongoMemoryServer:', memErr);
            process.exit(1);
        }
    }

    try {
        const { User } = require("../models/User");
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            console.log("🌱 Database is empty. Auto-seeding initial admin data...");
            const { seedDatabase } = require("./seed");
            await seedDatabase();
        }
    } catch (seedErr) {
        console.warn("⚠️ Auto-seeding warning:", seedErr);
    }
}

export default connectDB;