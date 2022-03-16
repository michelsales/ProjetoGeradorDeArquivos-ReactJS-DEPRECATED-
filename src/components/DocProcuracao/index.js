import React  from 'react';
import CompDinamico from '../CompDinamico';
import "./index.scss"; 


function DocProcuracao(props) {
const { procuracoesAtivas } = props;
const tipo = 'procuracao';
return(
    <div className={`v_modal`} >
         <div className={`v_modal__modalbox`}>
            <div className={`v_modal__modalbox--title`}>
                <h1>Procuração</h1>
                <div className={`v_modal__modalbox--title--close`} onClick={() => procuracoesAtivas(false)}>X</div>
            </div>
            <CompDinamico tipo={tipo}/>
         </div>
      </div>
  );
}

export default DocProcuracao;