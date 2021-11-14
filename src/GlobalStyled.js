import { createGlobalStyle } from "styled-components";
// import desktop from "./assets/home/background-home-desktop.jpg";
// import tablet from "./assets/home/background-home-tablet.jpg";
// import mobile from "./assets/home/background-home-mobile.jpg";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    overflow-y: hidden;
}

:root{
    /* Font */
    --title: 'Bellefair', serif;
    --des: 'Barlow Condensed', sans-serif;

    /* Color */
    --light-black: #0B0D17;
    --text: #D0D6F9;
    /* --blueish: #9093A7; */

    /* Text Size */
    --heading-1: 150px;
    --heading-2: 100px;
    --heading-3: 56px;
    --heading-4: 32px;
    --heading-5: 28px;

    --sub-1: 28px;
    --sub-2: 14px;
    --nav-text: 16px;

    --des-text: 18px;

}

`;

export default GlobalStyle;
