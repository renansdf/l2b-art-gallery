import React from 'react';
import { useClosedCamera } from '../../hooks/ClosedCamera';
import { useOverlay } from '../../hooks/Overlay';

import {Container, Content, CloseContentButton} from './styles';

const Overlay: React.FC = () => {
    const {overlayVisibility, setOverlayVisibility, content} = useOverlay();
    const {cameraReturnNavigation} = useClosedCamera();

    const handleClose = () => {
        setOverlayVisibility(!overlayVisibility)
        cameraReturnNavigation()
    }

    return (
        <Container isVisible={overlayVisibility}>
            <CloseContentButton onClick={handleClose}>&times;</CloseContentButton>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default Overlay;