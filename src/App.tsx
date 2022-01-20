import React from 'react';
import 'aframe';
import './helpers/vendors/aframe-billboard';

import Galeria from './environments/Galeria';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overlay from './components/Overlay';
import Popup from './components/Popup';
import FadePanel from './components/FadePanel';
import TitleBox from './components/TitleBox';
import GalleryHud from './components/GalleryHud';

import AppProvider from './hooks/AppProvider';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Galeria />
        <Header />
        <Sidebar />
        <Overlay />
        <Popup />
        <FadePanel />
        <TitleBox />
        <GalleryHud />
      </AppProvider>
    </>
  );
}

export default App;