// const path = require("path");
// const { basename } = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const { extendDefaultPlugins } = require("svgo");

// let mode = "development";
// let target = "web";
// const plugins = [
//   new CleanWebpackPlugin(),
//   new MiniCssExtractPlugin(),
//   new HtmlWebpackPlugin({
//     filename: "index.html",
//     template: "./index.html",
//     chunks: ["index"],
//   }),
//   new HtmlWebpackPlugin({
//     filename: "about.html",
//     template: "src/sections/about/about.html",
//     chunks: ["about"],
//   }),
//   new HtmlWebpackPlugin({
//     filename: "contact.html",
//     template: "src/sections/contact/contact.html",
//     chunks: ["contact"],
//   }),
//   new HtmlWebpackPlugin({
//     filename: "design.html",
//     template: "src/sections/design/design.html",
//     chunks: ["design"],
//   }),
//   new HtmlWebpackPlugin({
//     filename: "projects.html",
//     template: "src/sections/projects/projects.html",
//     chunks: ["projects"],
//   }),
//   new CleanWebpackPlugin(),
//   new FaviconsWebpackPlugin({
//     logo: "./assets/images/logo.png",
//     inject: (htmlPlugin) =>
//       basename(htmlPlugin.options.filename) === "index.html",
//   }),
//   new FaviconsWebpackPlugin({
//     logo: "./assets/images/logo.png",
//     inject: (htmlPlugin) =>
//       basename(htmlPlugin.options.filename) === "about.html",
//   }),
//   new FaviconsWebpackPlugin({
//     logo: "./assets/images/logo.png",
//     inject: (htmlPlugin) =>
//       basename(htmlPlugin.options.filename) === "contact.html",
//   }),
//   new FaviconsWebpackPlugin({
//     logo: "./assets/images/logo.png",
//     inject: (htmlPlugin) =>
//       basename(htmlPlugin.options.filename) === "design.html",
//   }),
//   new FaviconsWebpackPlugin({
//     logo: "./assets/images/logo.png",
//     inject: (htmlPlugin) =>
//       basename(htmlPlugin.options.filename) === "projects.html",
//   }),
//   new ImageMinimizerPlugin({
//     minimizerOptions: {
//       // Lossless optimization with custom option
//       // Feel free to experiment with options for better result for you
//       plugins: [
//         ["gifsicle", { interlaced: true }],
//         ["jpegtran", { progressive: true }],
//         ["optipng", { optimizationLevel: 5 }],
//         // Svgo configuration here https://github.com/svg/svgo#configuration
//         [
//           "svgo",
//           {
//             plugins: extendDefaultPlugins([
//               {
//                 name: "removeViewBox",
//                 active: false,
//               },
//               {
//                 name: "addAttributesToSVGElement",
//                 params: {
//                   attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
//                 },
//               },
//             ]),
//           },
//         ],
//       ],
//     },
//   }),
// ];

// if (process.env.NODE_ENV === "production") {
//   mode = "production";
//   // Temporary workaround for 'browserslist' bug that is being patched in the near future
//   target = "browserslist";
// }

// if (process.env.SERVE) {
//   // We only want React Hot Reloading in serve mode
//   plugins.push(new ReactRefreshWebpackPlugin());
// }

// module.exports = {
//   // mode defaults to 'production' if not set
//   mode: mode,

//   // This is unnecessary in Webpack 5, because it's the default.
//   // However, react-refresh-webpack-plugin can't find the entry without it.
//   // entry: "./src/index.js",
//   entry: {
//     index: "./src/index.js",
//     about: "./src/about.js",
//     contact: "./src/contact.js",
//     design: "./src/design.js",
//     projects: "./src/projects.js",
//   },
//   ignoreWarnings: [
//     {
//       module: /module2\.js\?[34]/, // A RegExp
//     },
//     {
//       module: /[13]/,
//       message: /homepage/,
//     },
//     /warning from compiler/,
//     (warning) => true,
//   ],

//   output: {
//     // output path is required for `clean-webpack-plugin`
//     path: path.resolve(__dirname, "dist"),
//     // this places all images processed in an image folder
//     assetModuleFilename: "images/[hash][ext][query]",
//   },

//   module: {
//     rules: [
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//         options: {
//           sources: {
//             list: [
//               "...",
//               // {
//               //   tag: "a",
//               //   attribute: "href",
//               //   type: "src",
//               // },
//             ],
//           },
//         },
//       },

//       {
//         test: /\.(s[ac]|c)ss$/i,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             // This is required for asset imports in CSS, such as url()
//             options: { publicPath: "" },
//           },
//           "css-loader",
//           "postcss-loader",
//           // according to the docs, sass-loader should be at the bottom, which
//           // loads it first to avoid prefixes in your sourcemaps and other issues.
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(pdf|png|svg|jpg|jpeg|gif)$/i,
//         /**
//          * The `type` setting replaces the need for "url-loader"
//          * and "file-loader" in Webpack 5.
//          *
//          * setting `type` to "asset" will automatically pick between
//          * outputing images to a file, or inlining them in the bundle as base64
//          * with a default max inline size of 8kb
//          */
//         type: "asset",

//         /**
//          * If you want to inline larger images, you can set
//          * a custom `maxSize` for inline like so:
//          */
//         parser: {
//           dataUrlCondition: {
//             maxSize: 10 * 1024,
//           },
//         },
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           // without additional settings, this will reference .babelrc
//           loader: "babel-loader",
//           options: {
//             /**
//              * From the docs: When set, the given directory will be used
//              * to cache the results of the loader. Future webpack builds
//              * will attempt to read from the cache to avoid needing to run
//              * the potentially expensive Babel recompilation process on each run.
//              */
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//             cacheDirectory: true,
//           },
//         },
//       },
//     ],
//   },

//   plugins: plugins,

//   target: target,

//   devtool: "source-map",

//   resolve: {
//     extensions: [".js", ".jsx"],
//   },

//   // required if using webpack-dev-server
//   devServer: {
//     contentBase: "./dist",
//     hot: true,
//   },
// };

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
    assetModuleFilename: "images/[hash][ext][query]",
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
              // {
              //   tag: "a",
              //   attribute: "href",
              //   type: "src",
              // },
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
        type: "asset",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       // name: "[name].[ext]",
        //       outputPath: "/images/",
        //       // publicPath: "/dist/assets/images/",
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
