const router = require("express").Router();
const BankController = require("../controllers/BankController");
const BookingController = require("../controllers/BookingController");
const CategoryController = require("../controllers/CategoryController");
const DashboardController = require("../controllers/DashboardController");
const ItemController = require("../controllers/ItemController");
const LoginController = require("../controllers/LoginController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router.get("/signin", LoginController.viewSignin);
router.post("/signin", LoginController.actionSignin);
router.use(auth);
router.get("/signout", LoginController.actionSignout);

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
//feature item
router.post("/item/add/feature", uploadSingle, ItemController.addFeature);
router.put("/item/update/feature", uploadSingle, ItemController.editFeature);
router.delete(
  "/item/:itemId/feature/:id",
  uploadSingle,
  ItemController.deleteFeature
);
//activity item
router.post("/item/add/activity", uploadSingle, ItemController.addActivity);
router.put("/item/update/activity", uploadSingle, ItemController.editActivity);
router.delete(
  "/item/:itemId/activity/:id",
  uploadSingle,
  ItemController.deleteActivity
);

// endpoint booking
router.get("/booking", BookingController.viewBooking);
router.get("/booking/:id", BookingController.showDetailBooking);
router.put("/booking/:id/accepted", BookingController.actionAccepted);
router.put("/booking/:id/rejected", BookingController.actionRejected);

module.exports = router;
