import React from 'react';
import {Container, GalleryRoom, RoomLinks} from './styles';

import BemVindos from '../../assets/img/1-Bem-Vindos.png';
import Exposicoes from '../../assets/img/2-Exposicoes.png';
import Infantil from '../../assets/img/3-Infantil.png';
import ContosENovelas from '../../assets/img/4-Contos-e-Novelas.png';
import Ensaios from '../../assets/img/5-Ensaios.png';
import Poesias from '../../assets/img/6-Poesias.png';
import Observatorio from '../../assets/img/7-observatorio.png';
import Modal from '../../assets/img/mapModal.png';

const imageList = [
    {name: 'Modal de Abertura', img: Modal, links: ['YagjLBIAACEAWFY3']},
    {name: 'Bem Vindos', img: BemVindos, links: ['YK7_XBAAACYAYEN3','YK7_dhAAACQAYEP0','YK7_mhAAACQAYESU']}, 
    {name: 'Exposições', img: Exposicoes, links: ['YK8CYxAAACUAYFDH','YK8LaRAAACMAYHkL']}, 
    {name: 'Infantis', img:Infantil, links: ['YK7jQhAAACMAX8bf','YK75phAAACUAYCos','YK75vRAAACMAYCqR','YK751BAAACMAYCsB']}, 
    {name: 'Contos e Novelas', img: ContosENovelas, links: ['YK7F4xAAACUAX0KH','YK7NYBAAACQAX2On','YK7NexAAACUAX2Qp','YK7NlxAAACMAX2Sz']}, 
    {name: 'Ensaios', img:Ensaios, links: ['YK7cOxAAACMAX6YT','YK7cTBAAACQAX6Zi','YK7cYBAAACUAX6bF','YK7ccRAAACMAX6cU','YK7cgxAAACQAX6do','YK7ckhAAACYAX6ez']}, 
    {name: 'Poesias', img: Poesias, links: ['YKgtiBEAACIAc1rT','YK6ssxAAACYAXtDp','YK66nRAAACMAXw_m','YK66xBAAACYAXxCg','YK663hAAACMAXxEX','YK66-BAAACMAXxGN','YK67JhAAACMAXxJh','YK67DhAAACQAXxHz']},
    {name: 'Observatório', img: Observatorio, links: ['YWoVlhEAACQAky7U','YWoV4REAACUAkzAo','YWoV_hEAACMAkzCs','YWoWIxEAACQAkzFQ','YWoWQhEAACYAkzHi','YWoWXREAACYAkzJa', 'YYWmZxAAACMAhbCx']},
    {name: 'Modal do Observatório', img: Modal, links: ['YYRTkhAAACIAf_Sd']}
]

const AdminGaleryMap: React.FC = () => {
    return (
        <Container>
            {imageList.map(obj => (
                <GalleryRoom key={obj.name}>
                    <h3>{obj.name}</h3>
                    <img src={obj.img} alt={obj.name} />
                    <RoomLinks>
                        {obj.links.map((code, index) => (
                            <a key={code} href={process.env.REACT_APP_PRISMIC_URL+code} target="_blank" rel="noreferrer">{obj.name} No {index+1}</a>
                        ))}
                    </RoomLinks>
                </GalleryRoom>
            ))}
        </Container>
    )
}

export default AdminGaleryMap;