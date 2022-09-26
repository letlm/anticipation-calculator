import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
       * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --red: #C7574F; 
        --black: #000000;
        --white-1: #ffffff;
        --white-2: #F2F2F2;
        --white-3:  #CECECE;
        --grey-0: #F5F7FA;
        --grey-1: #D1DCE3;
        --grey-2: #DDE6E9;
        --grey-3: #656565;
        --blue-1: #5D9CEC;
        --blue-2: #3D75BB;

;
    }

    body {
        background: var(--grey-0);
        font-family: 'Source Sans Pro', sans-serif;
        width: 100%;
        height: 100%;
    }
    
    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }

    
    

`;
