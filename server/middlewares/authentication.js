const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { auhorization } = req.headers;
    if (!auhorization) {
      throw { name: "Unauthorized" };
    }

    const token = auhorization.split(" ")[1];
    const payload = verifyToken(token);
    const user = await User.findOne({ where: { email: payload.email } });

    req.userLogin = {
      UserId: user.id,
      email: user.email,
    };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = authentication;
