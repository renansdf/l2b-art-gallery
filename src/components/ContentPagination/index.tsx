/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Client from '../../helpers/api';

import Pagination from '../Pagination';

import { Container } from './styles';
import { useSidebar } from '../../hooks/Sidebar';
import { useClosedCamera } from '../../hooks/ClosedCamera';
import { CloseContentButton } from '../Sidebar/styles';

interface IContentProps{
  contentId: string;
}

interface IPaginationDocument{
  data: {
    titulo: any;
    subtitulos?: {
      subtitle: any;
    }[];
    paginas: {
      subtitulo_de_pagina?: any;
      conteudo: any;
    }[]
  }
}

const ContentPagination: React.FC<IContentProps> = ({contentId}) => {
  const [content, setContent] = useState<IPaginationDocument>();
  const [currentPage, setCurrentPage] = useState(0);
  const {sidebarVisibility, setSidebarVisibility} = useSidebar();
  const {cameraReturnNavigation} = useClosedCamera();

  const handleClose = () => {
      setSidebarVisibility(!sidebarVisibility)
      cameraReturnNavigation();
  }

  const fetchData = useCallback(async (id: string) => {
    const response: IPaginationDocument = await Client.getByID(id, {});
    setContent(response);
    console.log(response)
  }, []);

  useEffect(() => {
    setCurrentPage(0);
    fetchData(contentId);
  }, [fetchData, contentId]);

  return (
    <div>
      <CloseContentButton onClick={handleClose}>&times;</CloseContentButton>
      {content && (
        <Container>
          <h1>{RichText.asText(content.data.titulo)}</h1>
          {content.data.subtitulos && content.data.subtitulos.map(sub => (
            <h3>{RichText.asText(sub.subtitle)}</h3>
          ))}
          <div>
            {content.data.paginas.map((pagina, index: number) => {
              if(index === currentPage){
                return(
                  <div key={contentId+index}>
                    {pagina.subtitulo_de_pagina && (
                      <h3>{RichText.asText(pagina.subtitulo_de_pagina)}</h3>
                    )}
                    {RichText.render(pagina.conteudo)}
                  </div>
                );
              }
            })}
          </div>
          
          {content.data.paginas.length > 1 && (
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={content.data.paginas.length} />
          )}
        </Container>
      )}

      {!content && (
        <h3>carregando conteúdo...</h3>
      )}
    </div>
  );
}

export default ContentPagination;