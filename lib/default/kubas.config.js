module.exports = {
    outputDir: `dist`,

    /**
     * Optionally define breakpoints for responsive utilities
     */
    breakpoints: {
        sm: '420px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
    },
    tokens: {
        color: {
            'black': `#1b1d1f`,
            'white': `#fff`,
            'grey-900': `#292d2f`,
            'grey-700': `#51565a`,
            'grey-500': `#969fa7`,
            'grey-300': `#d0dae3`,
            'grey-100': `#e7edf2`,
        },
        space: {
            /**
             * Optionally define this set of tokens as responsive.
             * This will mean each utility class generated with this set of values
             * will be available with responsive variants.
             *
             * This is not smart, so it's recommended that you use something
             * like https://www.npmjs.com/package/postcss-combine-media-query
             * to tidy up and group the the media queries in your output CSS.
             */
            _responsive: true,
            1: `.25rem`,
            2: `.5rem`,
            3: `.75rem`,
            4: `1rem`,
            6: `1.5rem`,
            8: `2rem`,
            10: `3rem`,
        },
        font: {
            base: `system-ui, sans-serif`,
        },
        weight: {
            normal: 400,
            bold: 700,
        },
        size: {
            sm: `.8rem`,
            md: `1rem`,
            lg: `1.2rem`,
            xl: `1.6rem`,
        },
    },
    utilities: {
        color: {
            c: `color`,
            bg: `background-color`,
        },
        space: {
            'p': `padding`,
            'm': `margin`,

            // Use an object to define a suffix for the CSS Selector
            // In this example, we want to apply the CSS to the direct
            // children of flow-space-X
            'flow-space': {
                '> *': '--flow-space',
            },
        },
        font: {
            font: `font-family`,
        },
        weight: {
            weight: `font-weight`,
        },
        size: {
            size: `font-size`,
        },
    },
};
