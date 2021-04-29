const router = require("express").Router();
const BankController = require("../controllers/BankController");
const BookingController = require("../controllers/BookingController");
const CategoryController = require("../controllers/CategoryController");
const DashboardController = require("../controllers/DashboardController");
const ItemController = require("../controllers/ItemController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

router.get("/", DashboardController.viewDashboard);
router.get("/dashboard", DashboardController.viewDashboard);

// endpoint category
router.get("/category", CategoryController.viewCategory);
router.post("/category", CategoryController.addCategory);
router.put("/category", CategoryController.editCategory);
router.delete("/category/:id", CategoryController.deleteCategory);

// endpoint bank
router.get("/bank", BankController.viewBank);
router.post("/bank", uploadSingle, BankController.addBank);
router.put("/bank", uploadSingle, BankController.editBank);
router.delete("/bank/:id", BankController.deleteBank);

// endpoint item
router.get("/item", ItemController.viewItem);
router.post("/item", uploadMultiple, ItemController.addItem);

// endpoint booking
router.get("/booking", BookingController.viewBooking);

module.exports = router;
