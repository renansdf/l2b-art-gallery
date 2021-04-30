import React from 'react';
import 'aframe';

import Museu from './environments/Museu';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import AppProvider from './hooks/AppProvider';

import GlobalStyles from './styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Museu />
        <Header />
        <Sidebar />
      </AppProvider>
      <GlobalStyles />
    </>
  );
}

export default App;