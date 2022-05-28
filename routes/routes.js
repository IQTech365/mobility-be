const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
var dir = "./public/videos"; // PATH TO UPLOAD FILE
if (!fs.existsSync(dir)) {
  // CREATE DIRECTORY IF NOT FOUND
  fs.mkdirSync(dir, { recursive: true });
}
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

const { signIn, createUser, getAllUsers } = require("../controllers/auth");
const {
  saveMedia,
  getMediaById,
  getMediaAll,
  updateMediaById,
} = require("../controllers/group");
const {
  createGiftCategory,
  deleteGiftCategory,
  updateGiftCategory,
  getAllGiftCategory,
  addGift,
  deleteGift,
  updateGift,
  getAllGift,
} = require("../controllers/gift");

router.post("/signin", signIn);
router.post("/create", createUser);
router.get("/users", getAllUsers);
router.post("/group", upload.single("video_file"), saveMedia);
router.get("/get-media", getMediaById);
router.get("/get-media-all", getMediaAll);
router.post("/update-media", updateMediaById);
//Gift Categories routes
router.post("/create-gift-category", createGiftCategory);
router.delete("/delete-gift-category", deleteGiftCategory);
router.put("/update-gift-category", updateGiftCategory);
router.get("/getall-gift-category", getAllGiftCategory);
// Add Gift routes
router.post("/add-gift", addGift);
router.delete("/delete-gift", deleteGift);
router.put("/update-gift", updateGift);
router.get("/getall-gift", getAllGift);

module.exports = router;
