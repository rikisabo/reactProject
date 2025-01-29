// import React from 'react';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import language from './useContext/language';

export const  NavBar =() =>{
  const [lang, setLang] = useState('he');
  // i18n.changeLanguage(lang)
  useEffect(() => {
    // If you're using i18n's changeLanguage method
    // i18n.changeLanguage(lang); 
    language={lang};
}, [lang]);
  return (
    <>
      <language.Provider value={lang}>
        <button onClick={() => setLang('he')}>hebrew</button>
        <button onClick={() => setLang('en')}>english</button>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{()=>{t("home")}}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">{()=>{t("about")}}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/connect">{()=>{t("connect")}}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">{()=>{t("services")}}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </language.Provider>
    </>
  );
};

