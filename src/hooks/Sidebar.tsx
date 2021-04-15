import React, { createContext, useState, useContext } from 'react';

interface SidebarContextData {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (value:boolean) => void;
  contentName: string;
  setContentName: (componentName: string) => void;
}

const SidebarContext = createContext<SidebarContextData>({} as SidebarContextData)

const SidebarProvider: React.FC = ({children}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [contentName, setContentName] = useState('galleryMap');

  return (
    <SidebarContext.Provider value={{isSidebarVisible, setIsSidebarVisible, contentName, setContentName}}>
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