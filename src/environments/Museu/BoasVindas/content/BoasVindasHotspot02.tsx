import React from 'react';
import { useTeleport } from '../../../../hooks/Teleport';

import {LoadedContentContainer, PagesContainer, ContentPage, DefaultParagraph, WelcomeRoomLink} from '../../sidebarContentStyles';

const BoasVindasHotspot02: React.FC = () => {
  const {teleportCamera} = useTeleport();

  return (
    <LoadedContentContainer>
      <PagesContainer>
        <ContentPage>
          <DefaultParagraph>
            <WelcomeRoomLink onClick={() => teleportCamera('ensaios')}>ensaios</WelcomeRoomLink>
            a arte, o artista e a criação artística

            <WelcomeRoomLink onClick={() => teleportCamera('poesias')}>poesias</WelcomeRoomLink>
            só sei falar comigo mesmo 
            soWelcomeRoomLinkre mundos

            <WelcomeRoomLink onClick={() => teleportCamera('exposicoes')}>exposições</WelcomeRoomLink>
            turquesas
            criatividade inquieta

            <WelcomeRoomLink onClick={() => teleportCamera('contosENovelas')}>contos & novelas</WelcomeRoomLink>
            laWelcomeRoomLinkirintos da memória

            <WelcomeRoomLink onClick={() => teleportCamera('memorias')}>memórias</WelcomeRoomLink>
            os medíocres
            memórias gustativas

            <WelcomeRoomLink onClick={() => teleportCamera('infantis')}>infantis</WelcomeRoomLink>
            o navio que era saudade
            amigos do pedro no jogo das palavras
            o panda e o unicórnio
            história para as crianças
          </DefaultParagraph>
        </ContentPage>
      </PagesContainer>
    </LoadedContentContainer>
  );
}

export default BoasVindasHotspot02;