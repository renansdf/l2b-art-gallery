import React from 'react';

import GalleryMap from '../GalleryMap';

import WhiteLogo from '../../assets/img/white_logo_desktop.png';
import { useSidebar } from '../../hooks/Sidebar';

import {Container, HeaderDesktop, HeaderMobile, Text, Logo, MenuButton, RoomName} from './styles';

const Header: React.FC = () => {
    const {setSidebarVisibility, setContent} = useSidebar();

    const handleOpenMenu = () => {
        setContent(GalleryMap);
        setSidebarVisibility(true);
    }

    return (
        <Container>
            <HeaderDesktop>
                <div>
                    <Text>L2Bgaleria</Text>
                    <Logo src={WhiteLogo} />
                    {/* <aside><img class="sound_icon"></aside> */}
                </div>

                <div>
                    <RoomName>bem-vindo</RoomName>
                    <MenuButton onClick={handleOpenMenu}>&#9776;</MenuButton>
                </div>
            </HeaderDesktop>

            <HeaderMobile>
                <div>
                    <Text>L2Bgaleria</Text>
                    <Logo src={WhiteLogo} />
                </div>

                {/* <img class="sound_icon align_right"> */}
            </HeaderMobile>

            {/* <audio id="ambient_sound" loop="true" src="./assets/audio/audio.mp3"></audio> */}
        </Container>
    )
}

export default Header;