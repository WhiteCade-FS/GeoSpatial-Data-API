const express = require("express");
const router = express.Router();
const {
  getGeoDataByLocation,
  saveGeoData,
  getAllGeoData,
  getGeoDataById,
} = require("../controllers/geoDataController");

router.get("/", getGeoDataByLocation);
router.post("/", saveGeoData);
router.get("/all", getAllGeoData);
router.get("/:id", getGeoDataById);

module.exports = router;
