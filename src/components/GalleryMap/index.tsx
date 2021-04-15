import React from 'react';
import {ItemContainer, ItemTitle, ItemDescription, ContactEmail} from './styles';

const GalleryMap: React.FC = () => {
    return (
        <>
            <ItemContainer teleport_to="ensaios">
                <ItemTitle>ensaios</ItemTitle>
                <ItemDescription>a arte, o artista e a criação artistica</ItemDescription>
            </ItemContainer>

            <ItemContainer teleport_to="poesias">
                <ItemTitle>poesias</ItemTitle>
                <ItemDescription>
                    só sei falar comigo mesmo<br />sobre mundos
                </ItemDescription>
            </ItemContainer>

            <ItemContainer teleport_to="exposições">
                <ItemTitle>exposições</ItemTitle>
                <ItemDescription>
                    turquesas 
                    <br />
                    criatividade inquieta
                </ItemDescription>
            </ItemContainer>

            <ItemContainer teleport_to="contos & novelas">
                <ItemTitle>contos & novelas</ItemTitle>
                <ItemDescription>
                    labirintos da memória
                </ItemDescription>
            </ItemContainer>

            <ItemContainer teleport_to="memórias">
                <ItemTitle>memórias</ItemTitle>
                <ItemDescription>
                    os medíocres
                    <br />
                    memorias gustativas 
                </ItemDescription>
            </ItemContainer>

            <ItemContainer teleport_to="infantis">
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

            <ItemContainer teleport_to="bem vindo">
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