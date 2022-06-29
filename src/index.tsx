import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import './index.css';
import App from './App';
import store from './store';

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});
ReactDOM.render(
  <Provider store={store}>
    <NextUIProvider theme={darkTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
  </Provider>,
  document.getElementById('root'),
);
