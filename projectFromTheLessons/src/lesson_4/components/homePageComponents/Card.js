
import React from 'react';
import img1 from './picuters/1.png'
import './Card.css'; // Assuming you create a separate CSS file for styling
import { withNamespaces } from 'react-i18next';
import i18n from 'i18next';
import { t } from 'i18next';

const Card = () => {
   
    return (
        <>
        
        <div className="card">
            <p className="card-description">{t("description")}</p>
            <button className="card-button">{t("Click Me")}</button>
        </div>
        </>
    );
};

export default (Card);
{/* <Card 
image="https://via.placeholder.com/150" 
description="This is a sample card description." 
/> */}