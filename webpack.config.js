const path = require("path");
module.exports = {
  entry: "./src/main.js",
  mode: "production",
  output: {
    filename: "cISO8583.js",
    path: path.resolve(__dirname, "dist"),
  },
};
