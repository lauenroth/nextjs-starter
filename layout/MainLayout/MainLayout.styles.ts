import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap');

  :root {
    --color-background: #1d3557;
    --color-text: #f1faee;
    --color-secondary: #a8dadc;
    --color-ternary: #457b9d;
    --color-highlight: #e63946;
    --max-width: 1200px;
  }
    
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Comfortaa, Helvetica, Verdana, sans-serif;;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .main-section {
    padding: 2rem;
  }
`;