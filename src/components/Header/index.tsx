import React, { useRef, useState } from 'react';

import GalleryMap from '../GalleryMap';

import WhiteLogo from '../../assets/img/white_logo_desktop.png';
import audioFile from '../../assets/audio/audio.mp3';
import soundOff from '../../assets/img/sound_off.svg';
import soundOn from '../../assets/img/sound_on.svg';
import { useSidebar } from '../../hooks/Sidebar';


import {Container, HeaderDesktop, HeaderMobile, Text, Logo, MenuButton, RoomName, ToggleMusic} from './styles';

const Header: React.FC = () => {
    const {setSidebarVisibility, setContent} = useSidebar();
    const [soundIcon, setSoundIcon] = useState(soundOff);
    const audioRef: any = useRef(null);

    const handleOpenMenu = () => {
        setContent(<GalleryMap />);
        setSidebarVisibility(true);
    }

    const handleSoundStatus = () => {
        if(soundIcon === soundOff && audioRef){
            setSoundIcon(soundOn);
            audioRef.current.play();
        } else {
            setSoundIcon(soundOff);
            audioRef.current.pause();
        } 
    }

    return (
        <Container>
            <HeaderDesktop>
                <div>
                    <Text>L2Bgaleria</Text>
                    <Logo src={WhiteLogo} />
                    <ToggleMusic onClick={handleSoundStatus}><img alt="toggle music" src={soundIcon} /></ToggleMusic>
                    <audio ref={audioRef} id="ambient_sound" loop={true} src={audioFile}></audio>
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
        </Container>
    )
}

export default Header;