const path = require("path");

module.exports = {
  entry: "./extension/main.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "extension")],
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "public",
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
};
