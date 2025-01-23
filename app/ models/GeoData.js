const mongoose = require("mongoose");

const geoDataSchema = new mongoose.Schema(
  {
    location: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    data: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GeoData", geoDataSchema);
