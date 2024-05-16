const router = require("express").Router();
const openAI = require("../helpers/openai");

const authController = require("../controllers/authController");
const errorHandler = require("../middlewares/errorHandler");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/google-login", authController.googleLogin);

router.post("/test", async (req, res) => {
  try {
    let { fullName, gender, age, weight, height } = req.body;

    let resOpenAI = await openAI(fullName, gender, age, weight, height);
    res.send(resOpenAI);
  } catch (error) {
    console.log(error);
  }
});

router.use(errorHandler);

module.exports = router;
