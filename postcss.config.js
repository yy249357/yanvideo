module.exports = {
    plugins: [require('autoprefixer'), require('cssnano'), require('postcss-px2viewport')({ viewportWidth: 1080 })],
};
