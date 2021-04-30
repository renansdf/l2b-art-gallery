import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --l2b-transparent: transparent;

        --l2b-black :#000; /* black rgb(0, 0, 0) rgb(0, 0, 1) */
        --l2b-black-transparent: rgba(0, 0, 0, 0.7);
        --l2b-light-black: #2b2b2b;
        
        --l2b-dark-grey: #5f5f5f; /* darkgrey */
        --l2b-grey: #818181; /* #999 */
        --l2b-light-grey: #a3a2a0; /*  #9c9c9c  #d8d8d8   #c6c6c6   #dad7d7   #e1e1e1 #a4a1a1 */

        --l2b-white: #f4f4f4; /*  #f1f1f1  #f2f2f2 */
        --l2b-white-full : #ffffff; /* #fefefe white rgba(255, 255, 255, 255) #fff */
        
        --l2b-red : #b71c1c;
        --l2b-dark-red : #bf0012;

        --l2b-map-header-mobile: #E1E1E1;
    }

    @font-face {
        font-family: "Volkart_Italic";
        src: url("../assets/fonts/volkart/volkart-italic-webfont.woff2") format("woff2"),
            url("../assets/fonts/volkart/volkart-italic-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Volkart_Light";
        src: url("../assets/fonts/volkart/volkart-light-webfont.woff2") format("woff2"),
            url("../assets/fonts/volkart/volkart-light-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Volkart_Medium";

        src: url("../assets/fonts/volkart/Volkart-Medium.svg") format("svg"),
            url("../assets/fonts/volkart/Volkart-Medium.woff") format("woff"),
            url("../assets/fonts/volkart/Volkart-Medium.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Volkart_Regular";

        src: url("../assets/fonts/volkart/Volkart-Regular.svg") format("svg"),
            url("../assets/fonts/volkart/Volkart-Regular.woff") format("woff"),
            url("../assets/fonts/volkart/Volkart-Regular.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Volkart_Bold";
        src: url("../assets/fonts/volkart/volkart-bold-webfont.woff2") format("woff2"),
            url("../assets/fonts/volkart/volkart-bold-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyles;