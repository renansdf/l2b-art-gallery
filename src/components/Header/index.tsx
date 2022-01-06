import React, { useRef, useState, useEffect } from 'react';

import GalleryMap from '../GalleryMap';

import { useSidebar } from '../../hooks/Sidebar';
import { useMusic } from '../../hooks/AmbientSound';

import WhiteLogo from '../../assets/img/white_logo_desktop.png';
import audioFile from '../../assets/audio/audio.mp3';
import soundOff from '../../assets/img/sound_off.svg';
import soundOn from '../../assets/img/sound_on.svg';

import {Container, HeaderDesktop, HeaderMobile, Logo, MenuButton, RoomName, ToggleMusic} from './styles';
import { useClosedCamera } from '../../hooks/ClosedCamera';

const Header: React.FC = () => {
    const {setSidebarVisibility, setContent} = useSidebar();
    const {isMusicPlaying, setIsMusicPlaying} = useMusic();
    const {cameraCoordinates} = useClosedCamera();
    const [soundIcon, setSoundIcon] = useState(soundOff);
    const [roomName, setRoomName] = useState('Bem-vindo');
    const audioRef: any = useRef(null);

    const handleOpenMenu = () => {
        setContent(<GalleryMap />);
        setSidebarVisibility(true);
    }

    useEffect(() => {
        if(isMusicPlaying === true){
            setSoundIcon(soundOn);
            audioRef.current.play();
        } else {
            setSoundIcon(soundOff);
            audioRef.current.pause();
        }
    }, [isMusicPlaying]);


    useEffect(() => {
      if(cameraCoordinates.x > 5.4){
        if(cameraCoordinates.y > 2){
          setRoomName('Observatório');
        } else {
          setRoomName('Exposições');
        }
      } else if(cameraCoordinates.x < 5.4 && cameraCoordinates.x > -5.4){
        setRoomName('Bem-vindo');
      } else {
        if(cameraCoordinates.y > 2 && cameraCoordinates.y < 5){
          setRoomName('Contos & Novelas');
        } else if(cameraCoordinates.y > 5){
          setRoomName('Poesias');
        } else if(cameraCoordinates.x < -22){
          setRoomName('Ensaios');
        } else {
          setRoomName('Infantis');
        }
      }
    }, [cameraCoordinates]);

    return (
        <Container>
            <HeaderDesktop>
                <div>
                    <Logo src={WhiteLogo} />
                    <ToggleMusic onClick={() => setIsMusicPlaying(!isMusicPlaying)}><img alt="toggle music" src={soundIcon} /></ToggleMusic>
                    <audio ref={audioRef} id="ambient_sound" loop={true} src={audioFile}></audio>
                </div>

                <div>
                    <RoomName>{roomName}</RoomName>
                    <MenuButton onClick={handleOpenMenu}>&#9776;</MenuButton>
                </div>
            </HeaderDesktop>

            <HeaderMobile>
                <div>
                  <span>
                    <Logo src={WhiteLogo} />
                    <ToggleMusic onClick={() => setIsMusicPlaying(!isMusicPlaying)}><img alt="toggle music" src={soundIcon} /></ToggleMusic>
                  </span>
                    <RoomName>{roomName}</RoomName>
                </div>

                <aside>
                    <MenuButton onClick={handleOpenMenu}>&#9776;</MenuButton>
                </aside>
            </HeaderMobile>
        </Container>
    )
}

export default Header;