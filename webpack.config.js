const path = require("path");
const { basename } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    contact: "./src/contact.js",
    design: "./src/design.js",
    projects: "./src/projects.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/sections/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "src/sections/contact/contact.html",
      chunks: ["contact"],
    }),
    new HtmlWebpackPlugin({
      filename: "design.html",
      template: "src/sections/design/design.html",
      chunks: ["design"],
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      template: "src/sections/projects/projects.html",
      chunks: ["projects"],
    }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: "./assets/images/logo.png",
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === "index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./assets/images/logo.png",
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === "about.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./assets/images/logo.png",
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === "contact.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./assets/images/logo.png",
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === "design.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./assets/images/logo.png",
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === "projects.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              "...",
              {
                tag: "a",
                attribute: "href",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(pdf|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
