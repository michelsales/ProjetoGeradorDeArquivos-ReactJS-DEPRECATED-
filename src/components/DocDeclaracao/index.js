import React  from 'react';
import CompDinamico from '../CompDinamico';
import "./index.scss"; 


function DocDeclaracao(props) {
const { declaracoesAtivas } = props;
const tipo = 'declaracao';

return(
    <div className={`v_modal`} >
         <div className={`v_modal__modalbox`}>
            <div className={`v_modal__modalbox--title`}>
                <h1>Declaração:</h1>
                <div className={`v_modal__modalbox--title--close`}  onClick={() => declaracoesAtivas(false)}>X</div>
            </div>
            <CompDinamico tipo={tipo}/>
         </div>
      </div>
  );
}

export default DocDeclaracao;