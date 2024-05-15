const {} = require("../models/index");

const authorization = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = authorization;
