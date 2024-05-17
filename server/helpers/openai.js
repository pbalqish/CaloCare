const { OpenAI } = require("openai");

async function handleOpenAI(fullName, gender, age, weight, height) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Please calculate BMI, with the following data: age ${age} years, gender ${gender}, weight ${weight} kg, height ${height} cm. The response must be a JSON, with format:
        {
        "fullName": "${fullName}"
        "bmi":  "",
        "bmi_category":  "",
        "healthy_weight": "... - ..."
        }`,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  console.log(completion.choices[0].message.content);

  return JSON.parse(completion.choices[0].message.content);
}

module.exports = handleOpenAI;
