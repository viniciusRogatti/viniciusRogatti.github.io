import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import GlobalStyled from './styles/GlobalStyle';
import ThemaProvider from './context/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemaProvider>
    <GlobalStyled />
    <App />
  </ThemaProvider>
);
