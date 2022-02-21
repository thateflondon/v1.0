const path = require("path");
const { basename } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const webpack = require("webpack");

let mode = "development";
let target = "web";

const plugins = [
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
  new CopyPlugin({
    patterns: [
      // Helps to dynamicaly handle img change in dark mode function
      { from: "./assets/images/moon.png", to: "images" },
      { from: "./assets/images/sun.png", to: "images" },
      { from: "./assets/images/profile/resume/resume-FR.pdf", to: "images" },
    ],
  }),
  new ImageMinimizerPlugin({
    minimizerOptions: {
      // Lossless optimization with custom option
      // Feel free to experiment with options for better result for you
      plugins: [
        ["gifsicle", { interlaced: true }],
        ["jpegtran", { progressive: true }],
        ["optipng", { optimizationLevel: 5 }],
        // Svgo configuration here https://github.com/svg/svgo#configuration
        [
          "svgo",
          {
            plugins: extendDefaultPlugins([
              {
                name: "removeViewBox",
                active: false,
              },
              {
                name: "addAttributesToSVGElement",
                params: {
                  attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                },
              },
            ]),
          },
        ],
      ],
    },
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
];

// if (process.env.NODE_ENV === "production") {
//   mode = "production";
//   // Temporary workaround for 'browserslist' bug that is being patched in the near future
//   target = "browserslist";
// }

// if (process.env.SERVE) {
//   // We only want React Hot Reloading in serve mode
//   plugins.push(new ReactRefreshWebpackPlugin());
// }

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    contact: "./src/contact.js",
    design: "./src/design.js",
    projects: "./src/projects.js",
  },

  ignoreWarnings: [
    {
      module: /module2\.js\?[34]/, // A RegExp
    },
    {
      module: /[13]/,
      message: /homepage/,
    },
    /warning from compiler/,
    (warning) => true,
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "files/[hash][ext][query]", //JS
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: ["..."],
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
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          // "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.(pdf|png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // required if using webpack-dev-server
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   port: 9000,
  //   hot: true,
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
