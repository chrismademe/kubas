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
            if ( typeof prop === 'object' ) {
                var suffix = Object.keys(prop)[0];
                var property = prop[Object.keys(prop)[0]];
            }

            _(token).each((value, name) => {
                if ( suffix ) {
                    utilityClasses.push(`.${classPrefix}-${name} ${suffix} { ${property}: var(--${tokenKey}-${name}) }`);
                } else {
                    utilityClasses.push(`.${classPrefix}-${name} { ${prop}: var(--${tokenKey}-${name}) }`);
                }
            });
        });
    });

    return {
        customProperties: customProperties,
        utilityClasses: utilityClasses,
    };
};
