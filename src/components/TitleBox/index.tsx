import React, { useCallback, useState } from 'react';
import Prismic from '@prismicio/client';
import Client from '../../helpers/api';

import { Container } from './styles';
import { useEffect } from 'react';

interface IResults{
  results: {
    id: string;
    data: {
      titulo: {
        text: string;
      }[]
    }
  }[]
}

const TitleBox: React.FC = () => {
  const [content, setContent] = useState<string>();
  const [contendId, setContentId] = useState<string>();

  const fetchData = useCallback(async (id: string) => {
    setContent('carregando...');
    const response: IResults = await Client.query(
      Prismic.Predicates.at('document.id', id)
    );
    setContent(response.results[0].data.titulo[0].text);
  }, []);

  useEffect(() => {
    if(contendId){
      fetchData(contendId)
    }
  }, [contendId, fetchData]);

  const AddHotspotMouseListeners = () => {
    const hotspots = document.querySelectorAll('[hotspot_collider]')
    hotspots.forEach(hotspot => {
      hotspot.addEventListener('mouseenter', () => {
        setContentId(hotspot.getAttribute('data-art-ref'))
        setTimeout(()=>{
          setContentId('')
          setContent('')
        },3000)
      })
    });

    hotspots.forEach(hotspot => {
      hotspot.addEventListener('mouseleave', () => {
        setContentId('')
        setContent('')
      })
    });
  }
  
  window.addEventListener('load', () => {
    AddHotspotMouseListeners()
  })
  
  return (
    <>
      {content && (
        <Container>
          {content}
        </Container>
      )}
    </>
  )
}

export default TitleBox;