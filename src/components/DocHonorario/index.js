import React  from 'react';
import CompDinamico from '../CompDinamico';
import "./index.scss"; 


function DocHonorario(props) {
const { honorariosAtivos } = props;
const tipo = 'honorario';
return(
    <div className={`v_modal`} >
         <div className={`v_modal__modalbox`}>
            <div className={`v_modal__modalbox--title`}>
                <h1>Contrato de honorários</h1>
                <div className={`v_modal__modalbox--title--close`}  onClick={() => honorariosAtivos(false)}>X</div>
            </div>
            <CompDinamico tipo={tipo}/>
         </div>
      </div>
  );
}

export default DocHonorario;