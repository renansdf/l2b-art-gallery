import React, { useCallback, useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs';

import Client from '../../helpers/api';
import Pagination from '../Pagination';

import { Content, CloseInstructions, PaginationContainer, Slide } from './styles'

interface IProps {
    closePopup: () => void;
}

interface IContent {
  slides: {
    title: any;
    description: any;
  }[]
}

const ObservatorioPopup: React.FC<IProps> = ({closePopup}) => {
    const [content, setContent] = useState<IContent>();
    const [currentSlider, setCurrentSlider] = useState(0);

    const fetchData = useCallback(async () => {
        const response = await Client.getByID('YYRTkhAAACIAf_Sd', {});
        setContent({
            slides: response.data.popupslides
        })
    }, []);

    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
      <Content>
        {content && content.slides.map((slide, index) => {
          if(index === currentSlider){
            return (
              <Slide key={slide.title[0].text}>
                <h1>{slide.title[0].text}</h1>
                {RichText.render(slide.description)}
              </Slide>
            )
          } else {
            return (<></>)
          }
        })}
        <PaginationContainer>
          {content && (
            <Pagination currentPage={currentSlider} setCurrentPage={setCurrentSlider} totalPages={content.slides.length} />
          )}
        </PaginationContainer>
        <CloseInstructions onClick={() => closePopup()}>&times;</CloseInstructions>
      </Content>
    )
}

export default ObservatorioPopup