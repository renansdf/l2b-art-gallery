import React, { createContext, useState, useContext } from 'react';

interface OverlayContextData {
  overlayVisibility: boolean;
  setOverlayVisibility: (value:boolean) => void;
  content: JSX.Element;
  setContent: (component: JSX.Element) => void;
}

const OverlayContext = createContext<OverlayContextData>({} as OverlayContextData)

const OverlayProvider: React.FC = ({children}) => {
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [content, setContent] = useState<JSX.Element>(<></>);

  return (
    <OverlayContext.Provider value={{overlayVisibility, setOverlayVisibility, content, setContent}}>
      {children}
    </OverlayContext.Provider>
  )
}

function useOverlay(): OverlayContextData {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('The context must be used within an Sidebar Provider');
  }

  return context;
}

export { useOverlay, OverlayProvider }