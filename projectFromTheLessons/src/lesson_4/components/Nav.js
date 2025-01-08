import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

function Nav({ t }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{t("home")}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">{t("about")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/connect">{t("connect")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">{t("services")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withNamespaces()(Nav);
