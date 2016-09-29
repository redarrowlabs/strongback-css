'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "black",
    "nav": ["docs", "components"],
    "panels": ["html", "notes", "resources", "info", "view", "context", ]
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Strongback CSS Components');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'library'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/dist');

fractal.components.set('default.preview', '@preview');
