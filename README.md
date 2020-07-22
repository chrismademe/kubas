# Kubas

Kubas takes design tokens and generates CSS Custom Properties and Utility Classes for them. The output is 2 CSS files, `tokens.css` and `utilities.css`.

The name is the Lithuanian translation of Cube - [CUBE CSS](https://piccalil.li/blog/cube-css/) is a term coined by Andy Bell and the idea behind it inspired this tool. He also has a similar tool called [Goron](https://github.com/hankchizljaw/goron) which is probably better than this, but I wanted to build something :)

## Installation

```javascript
npm install kubas --save
```

## Defining Tokens

Config can be done in JSON or JS. Create a `kubas.json` or `kubas.config.js` in your project directory. If you choose JS, it'll need to export an object containing your config.

By default, the `outputDir` key is set to `dist`, so set this to suit your project.

Your config should contain 2 objects, one to define your `tokens` and another to map those tokens to `utilities`. In the example below, we color tokens, which are mapped to `c-*` utility classes, which will set `color` to each of the available color tokens.

```javascript
module.exports = {
    outputDir: 'src/css',
    tokens: {
        color: {
            black: '#000',
            white: '#fff',
        },
    },
    utilities: {
        color: {
            c: 'color',
        },
    },
};
```

There's no support for breakpoints at the moment and I don't know if there ever will be. That sorta defeats the idea of the simplistic nature of CUBE CSS.

### Generate CSS

Run Kubas from your command line. To use the `kubas` alias, you'll need to install Kubas globally. (`npm install kubas -g`)

```bash
kubas
```

## Roadmap

-   Write tests
-   Add support for utility classes that aren't mapped directly to tokens
