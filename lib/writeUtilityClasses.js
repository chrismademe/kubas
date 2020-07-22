const prettier = require('prettier');

module.exports = (css) => {
    let output = `${css.join('\n\n')}`;
    return prettier.format(output, { parser: 'css' });
};
