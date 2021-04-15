import React from 'react';
import { SidebarProvider } from './Sidebar';

const AppProvider: React.FC = ({ children }) => (
  <SidebarProvider>
    {children}
  </SidebarProvider>
)

export default AppProvider;