import { OpenAI } from "langchain/llms/openai";

const cron = require("node-cron");
const data = [
  {
    date: "Aug 15th 23",
    festival: "Independence Day",
  },

  {
    date: "Aug 26th 23",

    festival: "Onam festival",
  },
  {
    date: "Aug 15th 23",
    festival: "Raksha Bandhan (Rakhi)",
  },
  {
    date: "Sep 7th 23",
    festival: "Krishna Janmashtami",
  },

  {
    date: "Oct 2th 23",
    festival: "Mahatma Gandhi Jayanti",
  },

  {
    date: "Oct 1th  23",
    festival: "First Day of Sharad Navratri",
  },
  {
    date: "Oct 20th  23",
    festival: "Dussehra",
  },
  {
    date: "Nov 8th  23",
    festival: "Diwali/Deepavali",
  },

  {
    date: "Nov 27th  23",
    festival: "Guru Tegh Bahadur's Martyrdom Day",
  },
  {
    date: "Dec 25th  23",
    festival: "Christmas",
  },
  {
    date: "Jan 1th  24",
    festival: "New Year's",
  },
];

async function nam() {
  try {
    const model = new OpenAI({
      modelName: "text-davinci-003", // Defaults to "text-davinci-003" if no model provided.
      temperature: 0.9,
      openAIApiKey: process.env.OPENAI_API_KEY || "", // In Node.js defaults to process.env.OPENAI_API_KEY
    });
    const res = await model.call(
      `Message for  team member for Diwali/Deepavali`
    );
    console.log({ res });
  } catch (error) {
    console.log(error);
  }
}

nam();

cron.schedule("53 11 * * *", async () => {
  console.log("dssd");
});
