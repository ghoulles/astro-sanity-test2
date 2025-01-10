/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%'))`
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                HeaderText: ['"Londrina Solid"', 'serif'],
                BodyText: ['"Roboto Condensed"', 'serif'],
            },
            backgroundColor: {
                'custom-bg': '#fcfff5', // Custom background color
            },
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#214f2d', //button color//
                    'primary-content': '#fcfff5',
                    secondary: '#214f2d',
                    'secondary-content': '#171227',
                    accent: '#214f2d', // other button color//
                    'accent-content': '#fcfff5',
                    neutral: '#112917', //banner color//
                    'neutral-content': '#fcfff5',
                    'base-100': '#112917',
                    'base-200': '#2e293c',
                    'base-content': '#ffffff',
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            },
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#214f2d', //more buttons//
                    'primary-content': '#fcfff5',
                    secondary: '#214f2d', //more buttons//
                    'secondary-content': '#fcfff5',
                    accent: '#214f2d', //more buttons//
                    'accent-content': '#fcfff5',
                    neutral: '#214f2d',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#d7d8e4',
                    'base-content': '#fcfff5',
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            }
        ]
    }
};
