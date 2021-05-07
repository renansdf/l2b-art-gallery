import React, { createContext, useState, useContext } from 'react';

interface TeleportContextData {
  cameraAttr: ICameraAttr;
  teleportCamera: (roomName: string) => void;
  currentFloor: number;
}

interface ICameraAttr {
  position: {
    x: number;
    y: number;
    z: number;
  }
  rotation: {
    x: number;
    y: number;
    z: number;
  }
}

interface ITeleportPoints {
  [roomName: string]: {
    position: {
      x: number;
      y: number;
      z: number;
    },
    rotation: {
      x: number;
      y: number;
      z: number;
    },
    floor: number;
  }
}

const teleportPoints : ITeleportPoints = {
  inicial: {
    position: {x:0, y: 1.6, z: 15},
    rotation: {x: 0, y: 0, z: 0},
    floor: 0
  },
  boasVindas: {
    position: {x:0, y: 1.6, z: 0},
    rotation: {x: 0, y: 0, z: 0},
    floor: 0
  },
  contosENovelas: {
    position: {x:14.8, y: 4.6, z: -4.2},
    rotation: {x: 0, y: 90, z: 0},
    floor: 1
  },
  ensaios: {
    position: {x:-26.7, y: 1.6, z: -4.12},
    rotation: {x: 0, y: 270, z: 0},
    floor: 0
  },
  exposicoes: {
    position: {x:-22.23, y: 4.6, z: -4.21},
    rotation: {x: 0, y: 270, z: 0},
    floor: 1
  },
  infantis: {
    position: {x:-6.66, y: 1.6, z: -4.09},
    rotation: {x: 0, y: 270, z: 0},
    floor: 0
  },
  memorias: {
    position: {x:6.72111, y: 1.6, z: -4.21},
    rotation: {x: 0, y: 90, z: 0},
    floor: 0
  },
  poesias: {
    position: {x:-29.5, y: 7.6, z: -4.2},
    rotation: {x: 0, y: 270, z: 0},
    floor: 2
  },
}

const TeleportContext = createContext<TeleportContextData>({} as TeleportContextData)

const TeleportProvider: React.FC = ({children}) => {
  const [cameraAttr, setCameraAttr] = useState<ICameraAttr>(teleportPoints['inicial']);
  const [currentFloor, setCurrentFloor] = useState<number>(0);

  const teleportCamera = (roomName: string) => {
    const roomAttr = teleportPoints[roomName];
    setCurrentFloor(roomAttr.floor);
    setCameraAttr({position: roomAttr.position, rotation: roomAttr.rotation});
  }

  return (
    <TeleportContext.Provider value={{cameraAttr, teleportCamera, currentFloor}}>
      {children}
    </TeleportContext.Provider>
  )
}

function useTeleport(): TeleportContextData {
  const context = useContext(TeleportContext);

  if (!context) {
    throw new Error('The context must be used within an Teleport Provider');
  }

  return context;
}

export { useTeleport, TeleportProvider }