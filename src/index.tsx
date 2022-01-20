import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <GlobalStyles/>
  </React.StrictMode>,
  document.getElementById('root')
);
