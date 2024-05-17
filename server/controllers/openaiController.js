const openAI = require("../helpers/openai");
const { Profile } = require("../models/index");

class Controller {
  static async weightStatus(req, res, next) {
    try {
      const { UserId, email } = req.userLogin;
      const profile = await Profile.findByPk(UserId, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const { fullName, gender, age, weight, height } = profile;

      let resOpenAI = await openAI(fullName, gender, age, weight, height);

      res.status(200).json({ resOpenAI });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
