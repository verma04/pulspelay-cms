console.log("ssd");

import { Buffer } from "buffer";
//@ts-ignore
import fs from "fs";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY || "");

// Natural Language

async function hff(text: any) {
  try {
    const set = await hf.textGeneration({
      model: "gpt2",
      inputs: `Write on  ${text}`,
    });

    console.log(set);

    // const image = await hf.textToImage({
    //   inputs: text,
    //   model: "stabilityai/stable-diffusion-xl-base-1.0",
    // });
    // const arrayBuffer = await image.arrayBuffer();
    // console.log(arrayBuffer);
    // const buffer = Buffer.from(arrayBuffer);
    // const base64String = buffer.toString("base64");
    // console.log(base64String);
    // // Tabular
    // fs.writeFile(
    //   `${text}.jpg`,
    //   base64String,
    //   { encoding: "base64" },
    //   function (err) {
    //     console.log("File created");
    //   }
    // );
  } catch (error) {
    console.log(error);
  }

  // Custom call, for models with custom parameters / outputs
}

export default hff;
