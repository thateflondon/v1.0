const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
};
