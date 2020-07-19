import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />;
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
