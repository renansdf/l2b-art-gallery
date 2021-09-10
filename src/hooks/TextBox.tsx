import React, { createContext, useState, useContext } from 'react';

interface TextBoxContextData {
  textBoxRef: string;
  setTextBoxRef: (value:string) => void;
}

const TextBoxContext = createContext<TextBoxContextData>({} as TextBoxContextData)

const TextBoxProvider: React.FC = ({children}) => {
  const [textBoxRef, setTextBoxRef] = useState('');

  return (
    <TextBoxContext.Provider value={{textBoxRef, setTextBoxRef}}>
      {children}
    </TextBoxContext.Provider>
  )
}

function useTextBox(): TextBoxContextData {
  const context = useContext(TextBoxContext);

  if (!context) {
    throw new Error('The context must be used within an Sidebar Provider');
  }

  return context;
}

export { useTextBox, TextBoxProvider }