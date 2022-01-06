import React, { useCallback, useEffect, useState } from 'react';
import Prismic from '@prismicio/client';
import Client from '../../helpers/api';

interface IConversProps {
  contentType: string;
}

interface IResults {
  results: {
    id: string;
    data: {
      capa: {
        url: string;
        alt: string;
      }
    }
  }[]
}

interface IContentData {
  [key: string]: {
    position: string;
    rotation: string;
    width: number;
    height: number;
    name: string;
  }
}

const ContentData: IContentData = {
  'YKgtiBEAACIAc1rT': {position: '-36.199 8.457 0.368', rotation: '0 -180 0', width: .93, height: 1.43, name: 'poesia_capa_01'},
  'YK6ssxAAACYAXtDp': {position: '-35.781 8.457 2.142', rotation: '0 -180 0', width: .93, height: 1.43, name: 'poesia_capa_02'},
  'YK66nRAAACMAXw_m': {position: '-38.563 8.457 2.142', rotation: '0 -180 0', width: .93, height: 1.43, name: 'poesia_capa_03'},
  'YK66xBAAACYAXxCg': {position: '-38.563 8.457 0.368', rotation: '0 -180 0', width: .93, height: 1.43, name: 'poesia_capa_04'},
  'YK663hAAACMAXxEX': {position: '-36.2 8.457 -8.7', rotation: '0 0 0', width: .93, height: 1.43, name: 'poesia_capa_05'},
  'YK66-BAAACMAXxGN': {position: '-35.783 8.457 -10.47', rotation: '0 0 0', width: .93, height: 1.43, name: 'poesia_capa_06'},
  'YK67JhAAACMAXxJh': {position: '-38.56 8.457 -10.47', rotation: '0 0 0', width: .93, height: 1.43, name: 'poesia_capa_07'},
  'YK67DhAAACQAXxHz': {position: '-38.56 8.457 -8.7', rotation: '0 0 0', width: .93, height: 1.43, name: 'poesia_capa_08'},

  'YK7_XBAAACYAYEN3': {position: '-3.332 5.801 -4.150', rotation: '0 90 0', width: 1.45, height: 2.35, name: 'boas_vindas_capa_01'},
  'YK7_dhAAACQAYEP0': {position: '0.074 5.801 -6.767', rotation: '0 0 0', width: 1.45, height: 2.35, name: 'boas_vindas_capa_02'},
  'YK7_mhAAACQAYESU': {position: '3.382 5.801 -4.150', rotation: '0 -90 0', width: 1.45, height: 2.35, name: 'boas_vindas_capa_03'},

  'YK7cOxAAACMAX6YT': {position: '-27.950 1.562 -2.430', rotation: '0 -180 0', width: 1, height: 1.5, name: 'ensaios_capa_01'},
  'YK7cTBAAACQAX6Zi': {position: '-30.755 1.562 -2.430', rotation: '0 -180 0', width: 1, height: 1.5, name: 'ensaios_capa_02'},
  'YK7cYBAAACUAX6bF': {position: '-33.485 1.562 -2.430', rotation: '0 -180 0', width: 1, height: 1.5, name: 'ensaios_capa_03'},
  'YK7ccRAAACMAX6cU': {position: '-33.495 1.562 -5.880', rotation: '0 0 0', width: 1, height: 1.5, name: 'ensaios_capa_04'},
  'YK7cgxAAACQAX6do': {position: '-30.750 1.562 -5.880', rotation: '0 0 0', width: 1, height: 1.5, name: 'ensaios_capa_05'},
  'YK7ckhAAACYAX6ez': {position: '-27.980 1.562 -5.880', rotation: '0 0 0', width: 1, height: 1.5, name: 'ensaios_capa_06'},

  'YK8CYxAAACUAYFDH': {position: '11.756 1.600 -5.340', rotation: '0 -90 0', width: 1, height: 1.5, name: 'exposicoes_capa_01'},
  'YK8LaRAAACMAYHkL': {position: '11.736 1.600 -2.962', rotation: '0 -90 0', width: 1, height: 1.5, name: 'exposicoes_capa_02'},

  'YK7F4xAAACUAX0KH': {position: '-27.163 4.948 -2.720', rotation: '-1.390 90 0', width: .4, height: .6, name: 'ContoENovelas_capa_01'},
  'YK7NYBAAACQAX2On': {position: '-29.410 4.948 -2.720', rotation: '-1.390 90 0', width: .4, height: .6, name: 'ContoENovelas_capa_02'},
  'YK7NexAAACUAX2Qp': {position: '-29.410 4.948 -5.629', rotation: '-1.390 90 0', width: .4, height: .6, name: 'ContoENovelas_capa_03'},
  'YK7NlxAAACMAX2Sz': {position: '-27.163 4.948 -5.629', rotation: '-1.390 90 0', width: .4, height: .6, name: 'ContoENovelas_capa_04'},

  'YK7jQhAAACMAX8bf': {position: '-10.486 0.880 -5.179', rotation: '-90 0 40.960', width: .145, height: .22, name: 'infantis_capa_01'},
  'YK75phAAACUAYCos': {position: '-13.620 0.880 -2.808', rotation: '-90 0 221.220', width: .145, height: .22, name: 'infantis_capa_02'},
  'YK75vRAAACMAYCqR': {position: '-16.335 0.880 -5.379', rotation: '-90 180 221.160', width: .145, height: .22, name: 'infantis_capa_03'},
  'YK751BAAACMAYCsB': {position: '-10.078 0.880 -2.687', rotation: '-90 180 41.090', width: .145, height: .22, name: 'infantis_capa_04'},
}

const Covers: React.FC<IConversProps> = ({contentType}) => {
  const [contents, setContent] = useState<IResults>();

  const fetchData = useCallback(async (type: string) => {
    const response: IResults = await Client.query(
      Prismic.Predicates.at('document.type', type)
    );
    setContent(response);
  }, []);

  useEffect(() => {
    fetchData(contentType);
  }, [fetchData, contentType]);

  return (
    <>
      {contents && contents.results.map(
        post => post.data.capa.url && (
          <a-entity 
            key={ContentData[post.id].name} 
            id={ContentData[post.id].name}
            class="collidable"
            geometry={`primitive: plane; width:${ContentData[post.id].width}; height: ${ContentData[post.id].height}`}
            material={"shader: flat; src:"+post.data.capa.url}
            position={ContentData[post.id].position}
            rotation={ContentData[post.id].rotation}
          ></a-entity>
        )
      )}
    </>
  );
}

export default Covers;