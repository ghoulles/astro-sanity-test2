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
                    'accent-content': '#fcfff5', //text in button//
                    neutral: '#112917', //banner color//
                    'neutral-content': '#fcfff5', //text in banner//
                    'base-100': '#112917', // changes color of banner and buttons//
                    'base-200': '#2e293c',
                    'base-content': '#fcfff5', // changes text ins banner and buttons//
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            },
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#214f2d', //more buttons//
                    'primary-content': '#fcfff5', //text in buttons//
                    secondary: '#214f2d', //more buttons//
                    'secondary-content': '#fcfff5', //text in buttons//
                    accent: '#214f2d', //more buttons//
                    'accent-content': '#fcfff5', //textin buttons//
                    neutral: '#214f2d',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff', //changes entire background colour//
                    'base-200': '#d7d8e4', //section borders//
                    'base-content': '#112917', // text color (body)//
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            }
        ]
    }
};
