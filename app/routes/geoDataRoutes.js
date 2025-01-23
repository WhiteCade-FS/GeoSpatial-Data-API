const express = require("express");
const router = express.Router();
const {
  getGeoDataByLocation,
  createGeoData,
  getAllGeoData,
  getGeoDataById,
} = require("../controller/geoDataController");

router.get("/", getGeoDataByLocation);
// The getGeoDataByLocation route will get the data by location by using geo-data?lat=<insert latitude here>&lon=<insert longitude here> as numbers.

router.post("/", createGeoData);
//The createGeoData allows you to create geo data requiring a lat and long and the external api will fill in the data such as weather, temp, winds etc.

router.get("/all", getAllGeoData);
//The getAllGeoData route will find all the geo data stored in Mongo or allow you to use search query by location using geo-data/all?location=<insert location name here>.

router.get("/:id", getGeoDataById);
//the getGeoDataById allows you to search by ID for whatever city youre looking for as long as it has been created and is in MongoDB.

module.exports = router;
