const GeoData = require("../ models/GeoData");

/*
The getGeoDataByLocation will take a longitude and latitude to find the location you are searching for. it only takes numbers though and this can sometimes skew certain information because some geographical locations have similar long and lat if unable to implement the extra numbers and inches. You can use the search query by entering geo-data?lat=<insert latitude here>&lon=<insert longitude here> as numbers.
*/

const getGeoDataByLocation = async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) {
    return res
      .status(404)
      .json({ error: "Latitude and longitude are required." });
  }
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const dataByLocation = await fetch(URL);
    if (!dataByLocation) {
      throw new Error(`API responded with status: ${dataByLocation.status}`);
    }
    const data = await dataByLocation.json();
    res.status(200).json({
      success: true,
      message: `${req.method} - request to API endpoint`,
      data: data,
    });
  } catch (error) {
    console.error("Could not find Geo-Spatial Data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch Geo-Spatial data from the API." });
  }
};

/*
The createGeoData allows you to input the location name if you want, longitude and latitude to create a new data type and returns the data for you. Including the weather, temp, winds, etc. This, like the get by location, can be skewed because of the type of data and strings that go into a lat long type of object. For example if you try to do Louisville, KY you get back a place in china because they have the similar long lat numbers.
*/

const createGeoData = async (req, res) => {
  const { location, latitude, longitude } = req.body;
  try {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    const response = await fetch(URL);
    const apiData = await response.json();
    const geoData = {
      location,
      latitude,
      longitude,
      data: apiData,
    };
    const newGeoData = await GeoData.create(geoData);
    console.log("data >>>", newGeoData);
    res.status(201).json({
      success: true,
      message: `${req.method} - request to API endpoint`,
      data: newGeoData,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      console.error("Error Validating!", error);
      res.status(422).json(error);
    } else {
      console.error(error);
      res.status(500).json(error);
    }
  }
};

/*
The getallGeoData function allows you to find all the data that has been stored in MongoDB but also allows you to search by location. So if you had given a name to some data you had previously gotten, you can search for it by entering geo-data/all?location=<insert location name here>
*/

const getAllGeoData = async (req, res) => {
  const { location } = req.query;
  try {
    let geoData;
    if (location) {
      geoData = await GeoData.find({ location });
    } else {
      geoData = await GeoData.find({});
    }
    res.status(200).json({
      success: true,
      message: "All geo data fetched successfully",
      data: geoData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve geo data." });
  }
};

// the getGeoDataById will allow you to search for and get by id. You can find the id of what you created either in the post body after creating one or going to Mongo and finding the ID you would like to search for.

const getGeoDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const geoDataById = await GeoData.findById(id);
    if (!geoDataById) {
      return res.status(404).json({
        success: false,
        message: `${id} not found. Check for typos and try again.`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `${req.method} - request to API endpoint`,
        data: geoDataById,
      });
    }
  } catch (error) {
    console.error("Could not find Studio", error);
  }
};
module.exports = {
  getGeoDataByLocation,
  getAllGeoData,
  createGeoData,
  getGeoDataById,
};
