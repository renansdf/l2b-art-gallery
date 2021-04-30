import React from 'react';
import { SidebarProvider } from './Sidebar';
import { TeleportProvider } from './Teleport';

const AppProvider: React.FC = ({ children }) => (
  <TeleportProvider>
    <SidebarProvider>
      {children}
    </SidebarProvider>
  </TeleportProvider>
)

export default AppProvider;