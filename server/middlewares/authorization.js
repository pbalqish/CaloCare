const { where } = require("sequelize");
const { User, Profile } = require("../models/index");

const authorization = async (req, res, next) => {
  try {
    const { UserId, email } = req.userLogin;
    console.log(req.userLogin);
    // const { id } = req.params;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw { name: "Forbidden" };
    }

    const profile = await Profile.findOne({ where: { UserId } });
    if (!profile) {
      throw { name: "Not Found" };
    }

    if (profile.UserId !== user.id) {
      throw { name: "Forbidden" };
    }

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = authorization;
