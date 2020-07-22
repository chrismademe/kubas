const fs = require('fs');

module.exports = (filename, data, label) => {
    fs.writeFile(filename, data, (err) => {
        if (err) return console.log(`Failed to write ${label}. ${err}`);
        console.log(`✔ Generated ${label}.`);
    });
};
