// next.config.js
const withOptimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withOptimizedImages({}));