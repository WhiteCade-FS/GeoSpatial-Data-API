const mongoose = require("mongoose");

const geoDataSchema = new mongoose.Schema(
  {
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true },
    },
    data: { type: Object, required: true },
  },
  { timestamps: true }
);

geoDataSchema.index({ location: "2dsphere" });
const GeoData = mongoose.model("GeoData", geoDataSchema);
module.exports = GeoData;
