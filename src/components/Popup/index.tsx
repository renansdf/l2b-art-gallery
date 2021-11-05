import React from 'react';
import { usePopup } from '../../hooks/Popup';

import {Container} from './styles';

const Popup: React.FC = () => {
    const {popupVisibility, content} = usePopup();

    return (
        <Container isVisible={popupVisibility}>
            {content}
        </Container>
    )
}

export default Popup;