import React, { createContext, useState, useContext } from 'react';

interface PopupContextData {
  popupVisibility: boolean;
  setPopupVisibility: (value:boolean) => void;
  content: JSX.Element;
  setContent: (component: JSX.Element) => void;
}

const PopupContext = createContext<PopupContextData>({} as PopupContextData)

const PopupProvider: React.FC = ({children}) => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [content, setContent] = useState<JSX.Element>(<></>);

  return (
    <PopupContext.Provider value={{popupVisibility, setPopupVisibility, content, setContent}}>
      {children}
    </PopupContext.Provider>
  )
}

function usePopup(): PopupContextData {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('The context must be used within an Sidebar Provider');
  }

  return context;
}

export { usePopup, PopupProvider }