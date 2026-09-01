import { Replicate } from "langchain/llms/replicate";

const main = async () => {
  const model = new Replicate({
    model:
      "a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5",
  });

  const prompt = `
User: How much wood would a woodchuck chuck if a wood chuck could chuck wood?
Assistant:`;

  const res = await model.call(prompt);
  console.log({ res });
};

main();
