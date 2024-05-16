const router = require("express").Router();

const authController = require("../controllers/authController");
const openaiController = require("../controllers/openaiController");
const errorHandler = require("../middlewares/errorHandler");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/google-login", authController.googleLogin);

router.post("/weight-status", openaiController.weightStatus);

router.use(errorHandler);

module.exports = router;
