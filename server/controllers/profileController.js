const { where } = require("sequelize");
const { Profile } = require("../models/index");

class Controller {
  static async read(req, res, next) {
    try {
      const { UserId, email } = req.userLogin;
      const profile = await Profile.findByPk(UserId, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json({
        data: profile,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { UserId, email } = req.userLogin;
      let profile = await Profile.findOne({ where: { UserId } });

      if (!profile) {
        throw { name: "Not Found" };
      }

      const { fullName, gender, age, weight, height } = req.body;
      await Profile.update(
        { fullName, gender, age, weight, height },
        { where: { id: UserId } }
      );

      profile = await Profile.findByPk(UserId, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json({
        message: "Successfully update profile",
        profile,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
