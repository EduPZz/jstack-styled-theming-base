import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.curentTheme.backgroundColor};
    color: ${props => props.theme.curentTheme.textColor};
    font-family: sans-serif;
  }
`;
