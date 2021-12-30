import React from 'react';
import { useSidebar } from '../../hooks/Sidebar';

import {Container, Content} from './styles';

const Sidebar: React.FC = () => {
    const {sidebarVisibility, content} = useSidebar();

    return (
        <Container isVisible={sidebarVisibility}>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default Sidebar;