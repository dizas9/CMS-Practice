const path = require("path");

module.exports = function override(config) {
  // Adjust the relative paths to your index.js files
  config.entry = {
    main: path.resolve(__dirname, "BACKEND-CMS", "index.js"),
  };

  return config;
};
