//@ts-nocheck

import sendEmail from "./sendMail";
import zipDirectory from "./zipConvertor";

const cron = require("node-cron");

const { exec } = require("child_process");
const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/production";
const backupPath = "/backup";

const backupTask = () => {
  const connectDB = async () => {
    try {
      await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected...");
    } catch (error) {
      console.log(error);
    }
  };
  connectDB();

  const { spawn } = require("child_process");

  const backupDate = new Date().toISOString();
  const backupFileName = `mongodb-atlas-backup-${backupDate}`;
  const backupFilePath = `backup/mongodb-atlas-backup-${backupFileName}`;

  const dumpCommand = `mongodump --uri "${connectionString}" --out "${backupFilePath}"`;
  const dumpProcess = spawn("bash", ["-c", dumpCommand]);

  dumpProcess.stdout.on("data", (data) => {
    console.log("Backup progress:", data.toString());
  });

  dumpProcess.on("close", (code) => {
    if (code === 0) {
      console.log("Backup completed successfully");

      zipDirectory(`${backupFilePath}`, "backup/zip", backupFileName);
    } else {
      console.error("Backup failed with code:", code);
    }
  });

  dumpProcess.stderr.on("data", (data) => {
    console.error("Backup error:", data.toString());
  });
};

cron.schedule("48 09 * * 2", backupTask);
