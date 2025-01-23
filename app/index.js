const express = require("express");
const app = express();
const morgan = require("morgan");
const routeHandler = require("./routes/geoDataRoutes");

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running", success: true });
});

app.use("/api/geo-data", routeHandler);

module.exports = app;
