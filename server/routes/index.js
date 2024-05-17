const router = require("express").Router();
const upload = require("../utils/multer");
const middlewareUpload = upload.single("image");

const authController = require("../controllers/authController");
const openaiController = require("../controllers/openaiController");
const profileController = require("../controllers/profileController");

const errorHandler = require("../middlewares/errorHandler");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/google-login", authController.googleLogin);

router.use(authentication);

router.get("/myprofile", authorization, profileController.read);
router.put("/myprofile/update", authorization, profileController.update);
router.post("/weight-status", authorization, openaiController.weightStatus);

router.use(errorHandler);

module.exports = router;
