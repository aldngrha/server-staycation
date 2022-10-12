const router = require("express").Router();
const LandingPageController = require("../controllers/API/LandingPageController");
// const { uploadSingle } = require("../middlewares/multer");

router.get("/landing-page", LandingPageController.landingPage);

module.exports = router;
