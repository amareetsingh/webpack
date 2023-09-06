const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].js", // Use contenthash for cache busting
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/, // Match various image file types
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]", // Use contenthash for cache busting
              outputPath: "images", // Output images to a folder named "images"
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Specify your HTML template file
    }),
  ],
  devServer: {
    host: "localhost",
    port: 8080, // Use a specific port, if needed
    historyApiFallback: true,
    open: true,
  },
};
