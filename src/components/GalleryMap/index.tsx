import React, { useCallback, useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';

import { usePopup } from '../../hooks/Popup';
import { useSidebar } from '../../hooks/Sidebar';
import { useTeleport } from '../../hooks/Teleport';
import Client from '../../helpers/api';

import ObservatorioPopup from '../ObservatorioPopup';
import {ItemContainer, ItemTitle, ItemDescription, ContactEmail, CloseButton} from './styles';

import instagramLogo from '../../assets/img/insta.svg';
import metaLogo from '../../assets/img/meta.svg';

interface IMenuTexts{
  data: {
    texto_ensaios: any;
    texto_poesias: any;
    texto_exposicoes: any;
    texto_observatorio: any;
    texto_contos_novelas: any;
    texto_infantis: any;
    texto_bemvindo: any;
  }
}

const GalleryMap: React.FC = () => {
    const {teleportCamera} = useTeleport();
    const {setSidebarVisibility} = useSidebar();
    const {setPopupVisibility, setContent} = usePopup();
    const [content, setMenuContent] = useState<IMenuTexts>();
  
    const fetchData = useCallback(async (id: string) => {
      const response: IMenuTexts = await Client.getByID(id, {});
      setMenuContent(response);
    }, []);
  
    useEffect(() => {
      fetchData('Yc4VtxMAACEAsMew');
    }, [fetchData]);

    const handleTeleport = (roomName: string) => {
        teleportCamera(roomName);
        setSidebarVisibility(false);
    }

    const observatorioTeleport = () => {
        teleportCamera('observatorio');
        setSidebarVisibility(false);
        setPopupVisibility(true);
        setContent(<ObservatorioPopup closePopup={() => setPopupVisibility(false)} />)
    }

    const handleClose = () => {
        setSidebarVisibility(false);
    }

    return (
        <>
            <ItemContainer onClick={() => handleTeleport('ensaios')}>
                <ItemTitle>ensaios</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_ensaios)}</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('poesias')}>
                <ItemTitle>poesias</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_poesias)}</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('exposicoes')}>
                <ItemTitle>exposições</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_exposicoes)}</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => observatorioTeleport()}>
                <ItemTitle>observatório</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_observatorio)}</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('contosENovelas')}>
                <ItemTitle>contos & novelas</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_contos_novelas)}</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('infantis')}>
                <ItemTitle>infantis</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_infantis)}</ItemDescription>
            </ItemContainer>

            <ItemContainer onClick={() => handleTeleport('boasVindas')}>
                <ItemTitle>bem-vindo</ItemTitle>
                <ItemDescription>{RichText.render(content?.data.texto_bemvindo)}</ItemDescription>
            </ItemContainer>

            <ItemContainer>
                <ItemTitle>contatos</ItemTitle>
                <ItemDescription>
                    <ContactEmail href="mailto:contato@l2bgaleria.com">contato@l2bgaleria.com</ContactEmail>
                </ItemDescription>
                <aside>
                  <a href="https://www.instagram.com/l2bgaleria/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="instagram"/></a>
                  <a href="https://www.facebook.com/L2BGaleria/" target="_blank" rel="noreferrer"><img src={metaLogo} alt="meta"/></a>
                </aside>
            </ItemContainer>
            <CloseButton onClick={handleClose} >&times;</CloseButton>
        </>
    )
}

export default GalleryMap;