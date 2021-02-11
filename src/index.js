import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import Fonts from './Styles/Fonts'

import App from './App';

import reportWebVitals from './Utils/reportWebVitals';
import * as serviceWorker from './Utils/serviceWorker';

import theme from './Utils/theme'
import './Styles/main.scss'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    {/* <Fonts /> */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
