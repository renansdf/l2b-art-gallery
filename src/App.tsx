import React from 'react';
import 'aframe';
import './helpers/vendors/aframe-billboard';

import Galeria from './environments/Galeria';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overlay from './components/Overlay';
import FadePanel from './components/FadePanel';
import TitleBox from './components/TitleBox';
import GalleryHud from './components/GalleryHud';

import AppProvider from './hooks/AppProvider';

import GlobalStyles from './styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Galeria />
        <Header />
        <Sidebar />
        <Overlay />
        <FadePanel />
        <TitleBox />
        <GalleryHud />
      </AppProvider>
      <GlobalStyles />
    </>
  );
}

export default App;