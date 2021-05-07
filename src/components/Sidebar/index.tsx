import React from 'react';
import { useSidebar } from '../../hooks/Sidebar';

import {Container, Content, CloseContentButton} from './styles';

const Sidebar: React.FC = () => {
    const {sidebarVisibility, setSidebarVisibility, content} = useSidebar();

    return (
        <Container isVisible={sidebarVisibility}>
            <CloseContentButton onClick={() => setSidebarVisibility(!sidebarVisibility)}>&times;</CloseContentButton>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default Sidebar;