const router = require("express").Router();
const LandingPageController = require("../controllers/API/LandingPageController");
const DetailPageController = require("../controllers/API/DetailPageController");

// const { uploadSingle } = require("../middlewares/multer");

router.get("/landing-page", LandingPageController.landingPage);
router.get("/detail-page/:id", DetailPageController.detailPage);

module.exports = router;
