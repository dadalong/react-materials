const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: './',
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
      themeConfig: {
        'nav-primary-bg-color': '#333',
      },
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
};