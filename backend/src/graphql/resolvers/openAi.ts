import { UserInputError } from "apollo-server";
import { TeamMember } from "../../models/teamMember";
const bcrypt = require("bcryptjs");
const { User } = require("../../models/User");
const checkAuth = require("../../util/checkAuth");
const checkRole = require("../../util/checkRole");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || "",
});
const openai = new OpenAIApi(configuration);
const openAiResolver = {
  Mutation: {
    async generateImage(_: any, { prompt, size }: any, context: any) {
      const { id } = await checkAuth(context);



      try {
        const imageSize =
          size === "small"
            ? "256x256"
            : size === "medium"
              ? "512x512"
              : "1024x1024";
        const response = await openai.createImage({
          prompt,
          n: 1,
          size: imageSize,
        });

        const imageUrl = response.data.data[0].url;

        return {
          img: imageUrl,
        };
      } catch (error) {
        console.warn(error);
      }
    },

    async checkGrammar(_: any, { prompt }: any, context: any) {
      const { id } = await checkAuth(context);



      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Correct this to standard English:\.${prompt}`,
          temperature: 0,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
        console.log(response.data.choices[0].text);
        return {
          img: response.data.choices[0].text,
        };
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { openAiResolver };
