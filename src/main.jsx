import './index.css'
import React from 'react'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './themes/theme.js'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
