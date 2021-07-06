import React from 'react';
import { useClosedCamera } from '../../hooks/ClosedCamera';
import { useSidebar } from '../../hooks/Sidebar';

import {Container, Content, CloseContentButton} from './styles';

const Sidebar: React.FC = () => {
    const {sidebarVisibility, setSidebarVisibility, content} = useSidebar();
    const {cameraReturnNavigation} = useClosedCamera();

    const handleClose = () => {
        setSidebarVisibility(!sidebarVisibility)
        cameraReturnNavigation();
    }

    return (
        <Container isVisible={sidebarVisibility}>
            <CloseContentButton onClick={handleClose}>&times;</CloseContentButton>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default Sidebar;