module.exports = {
    outputDir: `dist`,
    tokens: {
        color: {
            black: `#1b1d1f`,
            white: `#fff`,
            'grey-900': `#292d2f`,
            'grey-700': `#51565a`,
            'grey-500': `#969fa7`,
            'grey-300': `#d0dae3`,
            'grey-100': `#e7edf2`,
        },
        space: {
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
            p: `padding`,
            m: `margin`,
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