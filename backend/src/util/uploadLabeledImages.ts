import { FaceModel } from "../models/Face";

const { Canvas, Image } = require("canvas");
const canvas = require("canvas");
const faceapi = require("face-api.js");
faceapi.env.monkeyPatch({ Canvas, Image });

async function uploadLabeledImages(images: any, label: any, id: any) {

    try {
        let counter = 0;
        const descriptions = [];
        // Loop through the images
        for (let i = 0; i < images.length; i++) {
            const img = await canvas.loadImage(images[i]);
            counter = (i / images.length) * 100;
            console.log(`Progress = ${counter}%`);
            // Read each face and save the face descriptions in the descriptions array
            const detections = await faceapi
                .detectSingleFace(img)
                .withFaceLandmarks()
                .withFaceDescriptor();
            descriptions.push(detections.descriptor);
        }

        // Create a new face document with the given label and save it in DB
        const createFace = new FaceModel({
            label: label,
            descriptions: descriptions,
            userID: id,
        });

        await createFace.save();

        //     const user = User.findOneAndUpdate({ _id: id }, {
        //       $set: {
        //       facID:  descriptions
        //    } }).exec()
        // console.log(user)


        return true;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default uploadLabeledImages