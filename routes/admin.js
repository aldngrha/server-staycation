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
router.get("/item/show-image/:id", ItemController.showImageItem);
router.get("/item/:id", ItemController.showEditItem);
router.put("/item/:id", uploadMultiple, ItemController.editItem);
router.delete("/item/:id/delete", ItemController.deleteItem);

//endpoint detail item
router.get("/item/show-detail-item/:itemId", ItemController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, ItemController.addFeature);
router.put("/item/update/feature", uploadSingle, ItemController.editFeatur);

// endpoint booking
router.get("/booking", uploadSingle, BookingController.viewBooking);

module.exports = router;
