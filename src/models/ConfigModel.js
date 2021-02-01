const mongoose = require("mongoose");

const { Schema } = mongoose;

const ConfigDataSchema = new Schema({
  ecom: {},
  _id: { type: String },
});

module.exports = mongoose.model("ConfigData", ConfigDataSchema);
