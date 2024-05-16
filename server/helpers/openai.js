const { OpenAI } = require("openai");

async function handleOpenAI(fullName, gender, age, weight, height) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Hello, my name is ${fullName}. I am ${age} years old, ${gender}, weighing ${weight} kg and with a height of ${height} cm. Is my weight normal?`,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  console.log(completion.choices[0]);

  return completion.choices[0].message.content;
}

module.exports = handleOpenAI;
