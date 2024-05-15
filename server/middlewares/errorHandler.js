const errorHandler = (error, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  if (error.name === "Invalid Login") {
    status = 401;
    message = "Please input your Email and Password";
  }

  if (error.name === "Error Login") {
    status = 401;
    message = "Invalid Email or Password";
  }
  if (error.name === "Unauthorized") {
    status = 401;
    message = "Login to continue";
  }

  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    status = 400;
    message = error.errors[0].message;
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
