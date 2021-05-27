import React from 'react';
import { TeleportProvider } from './Teleport';
import { SidebarProvider } from './Sidebar';
import { OverlayProvider } from './Overlay';

const AppProvider: React.FC = ({ children }) => (
  <TeleportProvider>
    <SidebarProvider>
      <OverlayProvider>
        {children}
      </OverlayProvider>
    </SidebarProvider>
  </TeleportProvider>
)

export default AppProvider;