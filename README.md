# strongback-css

Strongback-css is the combination of a collection of default SASS files and dependencies, CSS components built on top of them, that are informed by the Red Arrow Labs pattern library.

This package is setup to build Red Arrow apps. While extendable, using the markup and CSS as provided will result in an app that reflects the Red Arrow look and feel.  

## Quick Start

```bash
npm install
npm run fractal:sync
npm run watchsass
npm run release
```



## Usage

### Knowledge

Tools:

* [Fractal](http://fractal.build/guide)
* [Bourbon](http://bourbon.io/docs/)
* [Susy](http://susydocs.oddbird.net/en/latest/)

## Install

TBD

## Developing

* `npm run watchsass` to build and watch scss changes happening in `ui-assets/scss`. This will also build a development css file with sourcemaps into `public/css` that is consumed by Fractal.
* `npm run fractal:sync` to build and run fractal instance at `http://localhost:3000`

Running both simultaneously will allow changes to scss files to automatically be hot-injected into the Fractal instance.

* `npm run release` build the production sass file in `dist/app.css`.

