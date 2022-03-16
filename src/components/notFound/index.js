import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import thiago from "../../assets/icone.png";
function notFound() {
  return(
      <div className={`v_all`}>
        <div className={`v_all--organization`}>
            <img src={thiago} width="100" height="100" alt="logo escritório" />
            <h1>Opsss... Acho que você está no local errado!! </h1>
            <h3>Porém você pode voltar para a página inicial se desejar...</h3>
            <Link to="/" className={`v_all--organization__link`}>Página Inicial</Link>
        </div>
      </div>
  );
}

export default notFound;