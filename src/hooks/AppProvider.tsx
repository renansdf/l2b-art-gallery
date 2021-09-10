import React from 'react';
import { TeleportProvider } from './Teleport';
import { SidebarProvider } from './Sidebar';
import { OverlayProvider } from './Overlay';
import { ClosedCameraProvider } from './ClosedCamera';
import { MusicProvider } from './AmbientSound';
import { TextBoxProvider } from './TextBox';

const AppProvider: React.FC = ({ children }) => (
  <TeleportProvider>
    <MusicProvider>
      <SidebarProvider>
        <OverlayProvider>
          <ClosedCameraProvider>
            <TextBoxProvider>
              {children}
            </TextBoxProvider>
          </ClosedCameraProvider>
        </OverlayProvider>
      </SidebarProvider>
    </MusicProvider>
  </TeleportProvider>
)

export default AppProvider;