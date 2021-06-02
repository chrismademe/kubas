const { cosmiconfigSync } = require('cosmiconfig');

module.exports = () => {
    let config = require('./default/kubas.config.js');

    // Search for user config
    const userConfig = cosmiconfigSync('kubas', {
        searchPlaces: ['kubas.json', 'kubas.config.js', 'design-tokens.json', 'design-tokens.config.js'],
    }).search();

    // If we find user config, let's use it
    if (userConfig) {
        return { ...config, ...userConfig.config };
    }

    // Let the user know we didn't find their config
    console.log(`❕ Couldn't find user config, generating CSS from defaults.`);

    // No user config, use the defaults
    return config;
};
