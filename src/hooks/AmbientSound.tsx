import React, { createContext, useState, useContext } from 'react';

interface MusicContextData {
  setIsMusicPlaying: (value: boolean) => void;
  isMusicPlaying: boolean;
}

const MusicContext = createContext<MusicContextData>({} as MusicContextData)

const MusicProvider: React.FC = ({children}) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <MusicContext.Provider value={{setIsMusicPlaying, isMusicPlaying}}>
      {children}
    </MusicContext.Provider>
  )
}

function useMusic(): MusicContextData {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error('The context must be used within an Music Provider');
  }

  return context;
}

export { useMusic, MusicProvider }