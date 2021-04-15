import React from 'react';
import 'aframe';

import Museu from './environments/Museu';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import {SidebarProvider} from './hooks/Sidebar';

import GlobalStyles from './styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <>
      <Museu />
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <GlobalStyles />
    </>
  );
}

export default App;