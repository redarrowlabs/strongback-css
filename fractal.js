'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const ralTheme = mandelbrot({
    "skin": "black",
    "nav": ["docs", "components"],
    "panels": ["html", "notes", "resources", "info", "view", "context", ]
    // any other theme configuration values here
    // http://fractal.build/guide/customisation/web-themes
});

// tell Fractal to use the configured theme by default
fractal.web.theme(ralTheme);

const hbs = require('@frctl/handlebars')({
    helpers: {
        getCssClasses: function(css) {
            var cssClass;
            var modifierClass = css.base + '--' + css.modifier;

            if (css.modifier !== undefined) {
                cssClass = css.base + ' ' + modifierClass;
            } else {
                cssClass = css.base
            }

            return cssClass;
        },
        uppercase: function(str) {
            return str.toUpperCase();
        }
    }
    /* other configuration options here */
});

// Tell Fractal to use the custom theme engine
fractal.components.engine(hbs);

// Give your project a title.
fractal.set('project.title', 'Strongback CSS Components');

// Tell Fractal where to look for components.
fractal.components.set('path', path.join(__dirname, 'library'));

// Tell Fractal where to look for documentation pages.
fractal.docs.set('path', path.join(__dirname, 'docs'));

// Tell the Fractal web preview plugin where to look for static assets.
fractal.web.set('static.path', path.join(__dirname, 'public'));

// Set the static HTML build destination
fractal.web.set('builder.dest', __dirname + '/dist');

// Set default preview template
fractal.components.set('default.preview', '@preview');
