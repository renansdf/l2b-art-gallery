import React from 'react';
import { useOverlay } from '../../hooks/Overlay';

import {Container, Content, CloseContentButton} from './styles';

const Sidebar: React.FC = () => {
    const {overlayVisibility, setOverlayVisibility, content} = useOverlay();

    return (
        <Container isVisible={overlayVisibility}>
            <CloseContentButton onClick={() => setOverlayVisibility(!overlayVisibility)}>&times;</CloseContentButton>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default Sidebar;