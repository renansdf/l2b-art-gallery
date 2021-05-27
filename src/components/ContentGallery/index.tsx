/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import Client from '../../helpers/api';

import ImageGalleryPagination from '../ImageGalleryPagination';

import { Container, Content, GalleryImage } from './styles';

interface IContentProps{
  contentId: string;
}

interface IGalleryDocument{
  data: {
    galeria: {
      imagem: any;
      legenda: any;
    }[]
  }
}

const ContentGallery: React.FC<IContentProps> = ({contentId}) => {
  const [content, setContent] = useState<IGalleryDocument>();
  const [currentImage, setCurrentImage] = useState(0);

  const fetchData = useCallback(async (id: string) => {
    const response: IGalleryDocument = await Client.getByID(id, {});
    setContent(response);
  }, []);

  useEffect(() => {
    setCurrentImage(0);
    fetchData(contentId);
  }, [fetchData, contentId]);

  return (
    <>
      {content && (
        <Container>
          <Content>
            {content.data.galeria.map((galleryItem: any, index: number) => {
              if(index === currentImage){
                return(
                  <GalleryImage key={contentId+index} src={galleryItem.imagem.url} alt={galleryItem.imagem.alt} />
                );
              }
            })}
            <ImageGalleryPagination currentPage={currentImage} setCurrentPage={setCurrentImage} totalPages={content.data.galeria.length} />
          </Content>

          <p>
            {currentImage + 1}
            {' '}
            /
            {' '}
            {content.data.galeria.length}
          </p>

        </Container>
      )}

      {!content && (
        <h3>carregando conteúdo...</h3>
      )}
    </>
  );
}

export default ContentGallery;