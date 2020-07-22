#! /usr/bin/env node

const generateCss = require('./lib/generateCss');
const writeCustomProperties = require('./lib/writeCustomProperties');
const writeUtilityClasses = require('./lib/writeUtilityClasses');
const writeCssFile = require('./lib/writeCssFile');
const config = require('./lib/loadConfig')();
const setupEnv = require('./lib/setupEnv')(config);

// Generate CSS from kubas.config.js
let generatedCss = generateCss(config);

// Write Custom Properties & Utility Classes
writeCssFile(
    `${config.outputDir}/tokens.css`,
    writeCustomProperties(generatedCss.customProperties),
    'Custom Properties'
);

writeCssFile(
    `${config.outputDir}/utilities.css`,
    writeUtilityClasses(generatedCss.utilityClasses),
    'Utility Classes'
);
