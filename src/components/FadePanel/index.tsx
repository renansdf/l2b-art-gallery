import React from 'react';
import { useTeleport } from '../../hooks/Teleport';

import { Container } from './styles';

const FabePanel: React.FC = () => {
    const {fadeStatus} = useTeleport();

    return (
        <Container isVisible={fadeStatus} />
    )
}

export default FabePanel;