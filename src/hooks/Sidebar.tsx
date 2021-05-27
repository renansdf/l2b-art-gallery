import React, { createContext, useState, useContext } from 'react';
import GalleryMap from '../components/GalleryMap';

interface SidebarContextData {
  sidebarVisibility: boolean;
  setSidebarVisibility: (value:boolean) => void;
  content: JSX.Element;
  setContent: (component: JSX.Element) => void;
}

const SidebarContext = createContext<SidebarContextData>({} as SidebarContextData)

const SidebarProvider: React.FC = ({children}) => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [content, setContent] = useState<JSX.Element>(<GalleryMap />);

  return (
    <SidebarContext.Provider value={{sidebarVisibility, setSidebarVisibility, content, setContent}}>
      {children}
    </SidebarContext.Provider>
  )
}

function useSidebar(): SidebarContextData {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('The context must be used within an Sidebar Provider');
  }

  return context;
}

export { useSidebar, SidebarProvider }