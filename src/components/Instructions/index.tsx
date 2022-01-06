/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import { Elements, RichText } from 'prismic-reactjs';

import Client from '../../helpers/api';
import { useMusic } from '../../hooks/AmbientSound';
import Pagination from '../Pagination';

import { Container, Content, Slide, CloseInstructions, PaginationContainer } from './styles';

interface ISlide {
  image: {
    url: string;
  };
  text:{
    text: string;
    type: Elements;
  }[];
  title:{
    text: string;
  }[];
}

interface IInstructionsContent {
  data: {
    slides: ISlide[]
  }
}

const Instructions: React.FC = () => {
  const [visibility, setVisibility] = useState(true);
  const {setIsMusicPlaying} = useMusic();
  const [currentSlider, setCurrentSlider] = useState(0);
  const [acontent, setContent] = useState<IInstructionsContent>();
  const pageId = 'YagjLBIAACEAWFY3';

  const fetchData = useCallback(async (id: string) => {
    const response: IInstructionsContent = await Client.getByID(id, {});
    setContent(response);
  }, []);

  const handleCloseInstructions = () => {
    setVisibility(!visibility);
    setIsMusicPlaying(true);
  }

  useEffect(() => {
    fetchData(pageId)
  }, [fetchData])

  return (
    <Container isVisible={visibility}>
      <Content>
        {acontent && acontent.data.slides.map((slide, index) => {
          if(index === currentSlider){
            return (
              <Slide key={`slide-${index}`}>
                {slide.title.length > 0 && (
                  <h1>{slide.title[0].text}</h1>
                )}

                {slide.image.url && (
                  <img src={slide.image.url} alt={`icon-${index}`} />
                )}

                {slide.text.length > 0 && (
                  RichText.render(slide.text)
                )}
              </Slide>
            )
          }
        })}
        <PaginationContainer>
          {acontent && (
            <Pagination currentPage={currentSlider} setCurrentPage={setCurrentSlider} totalPages={acontent.data.slides.length} />
          )}
        </PaginationContainer>
        <CloseInstructions onClick={handleCloseInstructions}>&times;</CloseInstructions>
      </Content>
    </Container>
  );
}

export default Instructions;