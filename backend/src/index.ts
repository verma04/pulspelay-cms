/* eslint-disable no-console */
const { ApolloServer, PubSub } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
import connectDB from "./db/db";
import * as dotenv from "dotenv";
import { FaceModel } from "./models/Face";
import moment from "moment";
import { LoginSession } from "./models/LoginSession";
import { Request, Response } from "express";
import { User } from "./models/User";
const typeDefs = require("./graphql/types/typeDefs");
const aboutDefs = require("./graphql/types/aboutDefs");
const homeDefs = require("./graphql/types/homeDefs");
const resolvers = require("./graphql/resolvers");
const awadsDefs = require("./graphql/types/awardsDefs");
const adviserDefs = require("./graphql/types/adviserDefs");
const blogDefs = require("./graphql/types/blogDefs");
const productDefs = require("./graphql/types/productDefs");
const { Canvas, Image } = require("canvas");
const canvas = require("canvas");
const faceapi = require("face-api.js");
const fileUpload = require("express-fileupload");
faceapi.env.monkeyPatch({ Canvas, Image });
const jwt = require("jsonwebtoken");
const fs = require("fs");

const {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require("graphql-upload");

const PORT = process.env.PORT || process.env.port || 4000;
const path = require("path");
const directoryToServe = "client";
dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/assert", express.static(path.join(__dirname, "..", "public")));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use("./", express.static(path.join(__dirname, ".", directoryToServe)));

// This middleware should be added before calling `applyMiddleware`.
app.use(graphqlUploadExpress());

async function startServer() {
  const server = new ApolloServer({
    typeDefs: [
      typeDefs,
      aboutDefs,
      homeDefs,
      awadsDefs,
      adviserDefs,
      blogDefs,
      productDefs,
    ],
    resolvers,
    cors: {
      origin: true,
    },
    context: ({ req }: any) => ({ req }),
  });
  await server.start();

  server.applyMiddleware({ app });
}
startServer();

connectDB();
app.listen(PORT, function () {
  console.log(`Server ready at ${PORT}`);
  console.log(moment());
});

async function LoadModels() {
  // Load the models
  // __dirname gives the root directory of the server
  await faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/ApiModels");
  await faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/ApiModels");
  await faceapi.nets.ssdMobilenetv1.loadFromDisk(__dirname + "/ApiModels");
}
LoadModels();