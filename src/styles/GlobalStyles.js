import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-background-color: hsla(35, 92%, 95%, 1);
        --primary-background-color-transparent: hsla(35, 92%, 95%, .8);
        --color-black: hsla(89, 62%, 7%, 1);
        --color-black-light: hsla(76, 20%, 23%, 1);
        --color-white: hsla(0, 0%, 100%, 1);
        --color-white-transparent: hsla(0, 0%, 100%, .2);
        --color-grey: hsla(87, 4%, 48%, 1);
        --color-grey-light: hsla(0, 0%, 90%, 1);
        --color-grey-light-transparent: hsla(0, 0%, 90%, .5);
        --color-orange: hsla(43, 96%, 55%, 1);
        --font-size-xxxl: 80px;
        --font-size-xxxl-secondary: 70px;
        --font-size-xxl: 50px;
        --font-size-xl: 25px;
        --font-size-l: 24px;
        --font-size-m: 20px;
        --font-size-s: 18px;
        --font-weight-400: 400;
        --font-family-body: 'Reem Kufi', sans-serif;
        --font-family-heading: 'Rozha One', serif;
        --line-height-xxxl: 93.6px;
        --line-height-xxl: 58.5px;
        --line-height-xl: 37.5px;
        --line-height-l: 36px;
        --line-height-m: 30px;
        --line-height-s: 28.08px;
        --line-height-xs: 27px;
        --layout-max-width: 1109px;
    }
    html {
        box-sizing: border-box;
        font-size: 62.5%
    }
    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 1.6rem;
        color: var(--color-black);
        background-color: var(--primary-background-color);
    }
    .break {
        display: block;
    }
`;

export default GlobalStyles;