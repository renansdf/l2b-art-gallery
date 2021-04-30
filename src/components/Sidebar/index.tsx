import React from 'react';
import { useSidebar } from '../../hooks/Sidebar';

import GalleryMap from '../GalleryMap';
import BoasVindas01 from './contents/Boasvindas_hotspot_01';

import {Container, Content, CloseContentButton} from './styles';

interface IContentsData{
    [name: string]: JSX.Element;
}

const Sidebar: React.FC = () => {
    const {isSidebarVisible, setIsSidebarVisible, contentName} = useSidebar();

    const contents: IContentsData = {
        boasVindas_01: <BoasVindas01 />,
        galleryMap: <GalleryMap />
    }

    return (
        <Container isVisible={isSidebarVisible}>
            <CloseContentButton onClick={() => setIsSidebarVisible(!isSidebarVisible)}>&times;</CloseContentButton>
            <Content>
                {contents[contentName]}
            </Content>
        </Container>
    )
}

export default Sidebar;