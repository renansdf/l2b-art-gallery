import React from 'react';
import 'aframe';

import Museu from './environments/Museu';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overlay from './components/Overlay';

import AppProvider from './hooks/AppProvider';

import GlobalStyles from './styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Museu />
        <Header />
        <Sidebar />
        <Overlay />
      </AppProvider>
      <GlobalStyles />
    </>
  );
}

export default App;