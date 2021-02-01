const configModel = require("../models/ConfigModel");

const config = {}; // some dummy obj

configModel.findOne({ _id: "MX_CONFIG" }, (error, dbConfig) => {
  if (error) {
    // do some err handling here
    return;
  }
  Object.assign(config.ecom, dbConfig?.ecom);
  // other computations

  return config;
});

