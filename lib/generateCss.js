const _ = require('lodash');

const generateCustomProperty = (key, value) => {
    return `--${key}: ${value};`;
};

module.exports = (config) => {
    const customProperties = [];
    const utilityClasses = [];

    if (config.length === 0) return;

    _(config.tokens).each((token, tokenKey) => {
        let props = config.utilities[tokenKey];

        // Generate Custom Properties
        _(token).each((value, name) => {
            customProperties.push(generateCustomProperty(`${tokenKey}-${name}`, value));
        });

        // Generate Utility Classes
        _(props).each((prop, classPrefix) => {
            _(token).each((value, name) => {
                utilityClasses.push(`.${classPrefix}-${name} { ${prop}: var(--${tokenKey}-${name}) }`);
            });
        });
    });

    return {
        customProperties: customProperties,
        utilityClasses: utilityClasses,
    };
};
