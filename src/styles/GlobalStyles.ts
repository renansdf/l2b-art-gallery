import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/font-faces.css';

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

    *{
      box-sizing: border-box;
    }
    body{
      margin: 0;
    }
    p, div, textarea{
      font-family: 'Volkart-Light';
      font-weight: normal;
    }
    h1, h2 {
      font-family: 'Volkart-Bold';
      font-weight: normal;
    }
    h3, h4, h5, h6{
      font-family: 'Volkart-Regular';
      font-weight: normal;
    }
`;

export default GlobalStyles;