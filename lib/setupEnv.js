const fs = require('fs');
const path = require('path');

module.exports = (config) => {
    let dir = config.outputDir;

    // Bail if the output directory already exists
    if (fs.existsSync(dir)) return;

    // Let the user know we're making a new directory
    console.log(`ℹ Output directory doesn't exist, creating it.`);

    // Create the output directory
    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) return console.log(err);
    });
};
