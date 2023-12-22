const { override, useBabelRc, addWebpackPlugin } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  useBabelRc(),
  // Add other customizations here
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            keep_fnames: true,
            keep_classnames: true,
            mangle: false,
            compress: false,
            output: {
              beautify: true,
              comments: false,
            },
          },
        }),
      ];
    }
    return config;
  }
);
