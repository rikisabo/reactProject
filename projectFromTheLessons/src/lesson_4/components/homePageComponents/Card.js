
import React from 'react';
import img1 from './picuters/1.png'
import './Card.css'; // Assuming you create a separate CSS file for styling
import { withNamespaces } from 'react-i18next';
const Card = ({t}) => {
    return (
        <div className="card">
            <p className="card-description">{"description"}</p>
            <button className="card-button">{"Click Me"}</button>
        </div>
    );
};

export default Card;
{/* <Card 
image="https://via.placeholder.com/150" 
description="This is a sample card description." 
/> */}