import React, { useCallback, useEffect, useState } from 'react'
import {Content, CloseInstructions} from './styles'
import Client from '../../helpers/api';
import { RichText } from 'prismic-reactjs';

interface IProps {
    closePopup: () => void;
}

interface IContent {
    title: string;
    description: any;
}

const ObservatorioPopup: React.FC<IProps> = ({closePopup}) => {
    const [content, setContent] = useState<IContent>();

    const fetchData = useCallback(async () => {
        const response = await Client.getByID('YYRTkhAAACIAf_Sd', {});
        setContent({
            title: response.data.title[0].text,
            description: response.data.description
        })
    }, []);

    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
        <Content>
            <h1>{content && content.title}</h1>
            {content && RichText.render(content.description)}
            <CloseInstructions onClick={() => closePopup()} />
        </Content>
    )
}

export default ObservatorioPopup