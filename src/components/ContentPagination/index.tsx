/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Client from '../../helpers/api';

import Pagination from '../Pagination';

import { Container } from './styles';

interface IContentProps{
  contentId: string;
}

interface IPaginationDocument{
  data: {
    titulo: any;
    paginas: {
      conteudo: any;
    }[]
  }
}

const ContentPagination: React.FC<IContentProps> = ({contentId}) => {
  const [content, setContent] = useState<IPaginationDocument>();
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = useCallback(async (id: string) => {
    const response: IPaginationDocument = await Client.getByID(id, {});
    setContent(response);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
    fetchData(contentId);
  }, [fetchData, contentId]);

  return (
    <div>
      {content && (
        <Container>
          <h1>{RichText.asText(content.data.titulo)}</h1>
          <div>
            {content.data.paginas.map((pagina: any, index: number) => {
              if(index === currentPage){
                return(
                  <div key={contentId+index}>
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