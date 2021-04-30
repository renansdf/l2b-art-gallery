import React from 'react';
import { useSidebar } from '../../hooks/Sidebar';
import { useTeleport } from '../../hooks/Teleport';
import {ItemContainer, ItemTitle, ItemDescription, ContactEmail} from './styles';

const GalleryMap: React.FC = () => {
    const {teleportCamera} = useTeleport();
    const {setIsSidebarVisible} = useSidebar();

    const handleTeleport = (roomName: string) => {
        teleportCamera(roomName);
        setIsSidebarVisible(false);
    }

    return (
        <>
            <ItemContainer onClick={() => handleTeleport('ensaios')}>
                <ItemTitle>ensaios</ItemTitle>
                <ItemDescription>a arte, o artista e a criação artistica</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('poesias')}>
                <ItemTitle>poesias</ItemTitle>
                <ItemDescription>
                    só sei falar comigo mesmo<br />sobre mundos
                </ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('exposicoes')}>
                <ItemTitle>exposições</ItemTitle>
                <ItemDescription>
                    turquesas 
                    <br />
                    criatividade inquieta
                </ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('contosENovelas')}>
                <ItemTitle>contos & novelas</ItemTitle>
                <ItemDescription>
                    labirintos da memória
                </ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('memorias')}>
                <ItemTitle>memórias</ItemTitle>
                <ItemDescription>
                    os medíocres
                    <br />
                    memorias gustativas 
                </ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('infantis')}>
                <ItemTitle>infantis</ItemTitle>
                <ItemDescription>
                    o navio que era saudade 
                    <br />
                    os amigos do pedro no jogo das palavras
                    <br />
                    o panda e o unicórnio
                    <br />
                    história para as crianças
                </ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('boasVindas')}>
                <ItemTitle>bem-vindo</ItemTitle>
            </ItemContainer>

            <ItemContainer>
                <ItemTitle>contatos</ItemTitle>
                <ItemDescription>
                    <ContactEmail href="mailto:contato@l2bgaleria.com">contato@l2bgaleria.com</ContactEmail>
                </ItemDescription>
            </ItemContainer>
        </>
    )
}

export default GalleryMap;