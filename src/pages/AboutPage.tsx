import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return(
        <React.Fragment>
            <h1>Страница информации</h1>
            <p>Loren ispsum dolor sit ament</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </React.Fragment>
    )
};