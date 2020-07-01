//used PostCSS to autoprefix and minimize our CSS when in production mode

const postcssPresetEnv = require('postcss-preset-env');
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        browsers: ['> 1%']
      }),
      require('cssnano')
    ]
  };
  return;
}
module.exports = {};