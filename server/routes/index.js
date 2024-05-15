const router = require("express").Router();

const authController = require("../controllers/authController");
const errorHandler = require("../middlewares/errorHandler");

router.post("/login", authController.login);
router.post("/register", authController.register);

router.use(errorHandler);

module.exports = router;
