const openAI = require("../helpers/openai");

class Controller {
  static async weightStatus(req, res, next) {
    try {
      let { fullName, gender, age, weight, height } = req.body;

      let resOpenAI = await openAI(fullName, gender, age, weight, height);

      res.status(200).json({ resOpenAI });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
