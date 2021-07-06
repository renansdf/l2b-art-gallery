import React from 'react';
import { TeleportProvider } from './Teleport';
import { SidebarProvider } from './Sidebar';
import { OverlayProvider } from './Overlay';
import { ClosedCameraProvider } from './ClosedCamera';

const AppProvider: React.FC = ({ children }) => (
  <TeleportProvider>
    <SidebarProvider>
      <OverlayProvider>
        <ClosedCameraProvider >
          {children}
        </ClosedCameraProvider>
      </OverlayProvider>
    </SidebarProvider>
  </TeleportProvider>
)

export default AppProvider;