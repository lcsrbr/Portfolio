import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../interfaces';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    transition: .5s;
    /* color: #fff; */

}

main {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.background1};
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
