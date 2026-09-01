const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY || "",
  apiSecret: process.env.VONAGE_API_SECRET || "",
});
const sendPhoneMessage = async ({ to, text }: any) => {
  const from = "PulsePlay Digital";

  await vonage.sms
    .send({ to, from, text })
    .then((resp: any) => {
      console.log("Message sent successfully");
   
    })
    .catch((err: any) => {
      console.log("There was an error sending the messages.");

    });
};

export default sendPhoneMessage;
