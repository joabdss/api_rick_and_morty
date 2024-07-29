import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
    return (

    <div className="layout">

      <nav className="header">
        <ul>
          <li>
            <Link to="/characters">Personagens</Link>
          </li>
          <li>
            <Link to="/location">Localizações</Link>
          </li>
          <li>
            <Link to="/episodes">Episódios</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;