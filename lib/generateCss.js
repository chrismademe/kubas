const _ = require('lodash');

const generateCustomProperty = (key, value) => {
    // Skip responsive key
    if (_.endsWith(key, '_responsive')) {
        return null;
    }

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
            // Check for complex selector
            if (typeof prop === 'object') {
                var suffix = Object.keys(prop)[0];
                var property = prop[Object.keys(prop)[0]];
            }

            _(token).each((value, name) => {
                // Skip responsive key
                if (name === '_responsive') {
                    return;
                }

                // Complex selector
                if (suffix) {
                    utilityClasses.push(`.${classPrefix}-${name} ${suffix} { ${property}: ${value} }`);

                    // Responsive
                    if (
                        config.breakpoints &&
                        token.hasOwnProperty('_responsive') &&
                        token._responsive === true
                    ) {
                        _(config.breakpoints).each((breakpoint, breakpointName) => {
                            utilityClasses.push(`@media (min-width: ${breakpoint}) {
                                .${breakpointName}\\:${classPrefix}-${name} ${suffix} { ${property}: ${value} }
                            }`);
                        });
                    }

                    // Simple selector
                } else {
                    utilityClasses.push(`.${classPrefix}-${name} { ${prop}: ${value} }`);

                    // Responsive
                    if (
                        config.breakpoints &&
                        token.hasOwnProperty('_responsive') &&
                        token._responsive === true
                    ) {
                        _(config.breakpoints).each((breakpoint, breakpointName) => {
                            utilityClasses.push(`@media (min-width: ${breakpoint}) {
                                .${breakpointName}\\:${classPrefix}-${name} { ${prop}: ${value} }
                            }`);
                        });
                    }
                }
            });
        });
    });

    return {
        customProperties: customProperties,
        utilityClasses: utilityClasses,
    };
};
