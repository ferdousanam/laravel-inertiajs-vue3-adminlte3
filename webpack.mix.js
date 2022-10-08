const process = require('process')
const mix = require('laravel-mix')
const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const webpackConfig = require('./webpack.config')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .vue({runtimeOnly: (process.env.NODE_ENV || 'production') === 'production'})
    .webpackConfig(webpackConfig)
    // .sass('resources/scss/app.scss', 'public/css/adminlte.css')
    .postCss('resources/css/app.css', 'public/css', [
        // prettier-ignore
        // cssImport(),
        cssNesting(),
    ])
    .version()

mix.options({
    legacyNodePolyfills: true,
    // processCssUrls: false,
});
mix.webpackConfig({
    stats: {
        children: true,
    },
});

if (!mix.inProduction()) {
    mix.sourceMaps(false, 'source-map');
}

mix.disableSuccessNotifications();
