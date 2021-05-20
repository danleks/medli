import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-background-color: hsla(35, 92%, 95%, 1);
        --color-black: hsla(89, 62%, 7%, 1);
        --color-white-transparent: hsla(0, 0%, 100%, .2);
        --color-grey: hsla(87, 4%, 48%, 1);
        --color-grey-light: hsla(0, 0%, 90%, 1);
        --color-grey-light-transparent: hsla(0, 0%, 90%, .5);
        --color-orange: hsla(43, 96%, 55%, 1);
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
    }
`;

export default GlobalStyles;