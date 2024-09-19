// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production';

//   return {
//     mode: isProduction ? 'production' : 'development',  
//     entry: {
//       main: './client/src/js/index.js',  // Adjusted path
//       install: './client/src/js/install.js',  // Adjusted path
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//       publicPath: '/', // Ensure proper public path for HMR and caching
//     },
//     plugins: [
      
//       new CleanWebpackPlugin(), 

//       new HtmlWebpackPlugin({
//         template: './client/index.html',  // Adjusted path for the HTML template
//         title: 'J.A.T.E',
//       }),
//       isProduction && new InjectManifest({ // Only inject the service worker in production mode
//         swSrc: './client/src-sw.js',  
//         swDest: 'src-sw.js',
//       }),
//       new WebpackPwaManifest({
//         name: 'Just Another Text Editor',
//         short_name: 'JATE',
//         description: 'Takes notes with JavaScript syntax highlighting!',
//         background_color: '#225cca',
//         theme_color: '#225cca',
//         start_url: '/',
//         publicPath: '/',
//         icons: [
//           {
//             src: path.resolve('client/src/images/logo.png'),  // Adjusted path for the logo
//             sizes: [96, 128, 192, 256, 384, 512],
//             destination: path.join('assets', 'icons'),
//           },
//         ],
//       }),
//     ].filter(Boolean), // Filter out false plugins (like when `isProduction` is false)
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Handle image files
//           type: 'asset/resource',
//         },
//         {
//           test: /\.m?js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-transform-runtime'],
//             },
//           },
//         },
//       ],
//     },
//     devServer: {
//       static: {
//         directory: path.join(__dirname, 'dist'),  // Serve files from the 'client' directory
//       },
//       compress: true,
//       port: 8080,  // Webpack Dev Server running on port 8080
//       hot: true,
//       proxy: {
//         '/api': 'http://localhost:3000',  // Proxy API requests to the backend server running on port 3000
//       },
//     },
//   };
// };

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production';

//   return {
//     mode: isProduction ? 'production' : 'development',
//     entry: {
//       main: './client/src/js/index.js',
//       install: './client/src/js/install.js',
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//       publicPath: '/',
//     },
//     plugins: [
//       new CleanWebpackPlugin(),
//       new HtmlWebpackPlugin({
//         template: './client/index.html',
//         title: 'J.A.T.E',
//       }),
//       isProduction &&
//         new InjectManifest({
//           swSrc: './client/src-sw.js',
//           swDest: 'src-sw.js',
//         }),
//       new WebpackPwaManifest({
//         name: 'Just Another Text Editor',
//         short_name: 'JATE',
//         description: 'Takes notes with JavaScript syntax highlighting!',
//         background_color: '#225cca',
//         theme_color: '#225cca',
//         start_url: '/',
//         publicPath: '/',
//         icons: [
//           {
//             src: path.resolve('client/src/images/logo.png'),
//             sizes: [96, 128, 192, 256, 384, 512],
//             destination: path.join('assets', 'icons'),
//           },
//         ],
//       }),
//     ].filter(Boolean),
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.(png|svg|jpg|jpeg|gif)$/i,
//           type: 'asset/resource',
//         },
//         {
//           test: /\.m?js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-transform-runtime'],
//             },
//           },
//         },
//       ],
//     },
//     devServer: {
//       static: {
//         directory: path.join(__dirname, 'dist'),
//         watch: true,
//       },
//       compress: true,
//       port: 8080,
//       hot: true,
//       historyApiFallback: true, // Ensure SPA fallback
//       client: {
//         overlay: true,
//       },
//       proxy: {
//         '/api': 'http://localhost:3000',
//       },
//     },
//   };
// };


// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production';

//   return {
//     mode: isProduction ? 'production' : 'development',
//     entry: {
//       main: './client/src/js/index.js',
//       install: './client/src/js/install.js',
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//       publicPath: '/',
//     },
//     plugins: [
      
//       new HtmlWebpackPlugin({
//         template: './client/index.html',
//         title: 'J.A.T.E',
//       }),
//       isProduction &&
//         new InjectManifest({
//           swSrc: './client/src-sw.js',
//           swDest: 'src-sw.js',
//         }),
//       new WebpackPwaManifest({
//         name: 'Just Another Text Editor',
//         short_name: 'JATE',
//         description: 'Takes notes with JavaScript syntax highlighting!',
//         background_color: '#225cca',
//         theme_color: '#225cca',
//         start_url: '/',
//         publicPath: '/',
//         fingerprints: false, // Disable hashing for the manifest file
//         icons: [
//           {
//             src: path.resolve('client/src/images/logo.png'),
//             sizes: [96, 128, 192, 256, 384, 512],
//             destination: path.join('assets', 'icons'),
//           },
//         ],
//       }),
//     ].filter(Boolean),
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.(png|svg|jpg|jpeg|gif)$/i,
//           type: 'asset/resource',
//         },
//         {
//           test: /\.m?js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-transform-runtime'],
//             },
//           },
//         },
//       ],
//     },
//     devServer: {
//       static: {
//         directory: path.join(__dirname, 'dist'),
//       },
//       compress: true,
//       port: 8080,
//       hot: false, // Ensure HMR is disabled if you don't need it
//       historyApiFallback: true, // Important for SPA routing
//       proxy: {
//         '/api': 'http://localhost:3000',
//       },
//     },
//   };
// };


const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: './client/src/js/index.js',
      install: './client/src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
        title: 'J.A.T.E',
      }),
      isProduction &&
        new InjectManifest({
          swSrc: './client/src-sw.js',
          swDest: 'src-sw.js',
        }),
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Takes notes with JavaScript syntax highlighting!',
        background_color: '#225cca',
        theme_color: '#225cca',
        start_url: '/',
        publicPath: '/',
        fingerprints: false, // Disable hashing for the manifest file
        icons: [
          {
            src: path.resolve('client/src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new WebpackManifestPlugin({
        fileName: 'manifest.webmanifest',
        generate: (seed, files) => {
          return {
            name: 'Just Another Text Editor',
            short_name: 'JATE',
            description: 'A simple text editor PWA!',
            icons: files
              .filter((file) => file.name.endsWith('.png'))
              .map((file) => ({
                src: file.name,
                sizes: `${file.size}x${file.size}`,
                type: 'image/png',
              })),
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#225cca',
          };
        },
      }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
      hot: false, // Ensure HMR is disabled if you don't need it
      historyApiFallback: true, // Important for SPA routing
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  };
};




