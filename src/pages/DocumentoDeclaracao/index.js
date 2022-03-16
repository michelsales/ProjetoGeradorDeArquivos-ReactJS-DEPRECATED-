import React, { useContext } from "react";
import { Context } from "../../App";
import thiago from "../../assets/Logo_01.png";
import "./index.scss";
function DocumentoDeclaracao() {
  const context = useContext(Context);

  return (
    <div className={`v_containerDocD`}>
      <img
        src={thiago}
        width="500"
        height="150"
        alt="logo escritório"
        className={`v_containerDocD--image`}
      />
      <h2>DECLARAÇÃO DE POBREZA PARA FINS JUDICIAIS</h2>
      <p>
        <b>
          <u>Outorgante: {context.state.user.nome}</u>
        </b>
        ,{context.state.user.nacionalidade}, {context.state.user.estadoCivil},
        {context.state.user.ocupacao}, portador da cédula de identidade
        {context.state.user.estadoDaIdentidade}- {context.state.user.rg} SSP/
        {context.state.user.estadoDaIdentidade}
        inscrito no CPF sob o nº {context.state.user.cpf}, filho de
        {context.state.user.pai} e de {context.state.user.mae}, residente e
        domiciliado na {context.state.user.endereco},{context.state.user.cidade}
        , Nos termos da lei 1.060 de 05 de fevereiro de 1950 e suas modificações
        subsequentes, entre estas a da lei 7.510 de 04 de julho de 1986, DECLARA
        ser pobre no sentido legal, e que não tem condições financeira de pagar
        custas processuais, sem prejuízo ao próprio sustento ou de sua família.
      </p>
      <p>Ituiutaba-MG {context.state.user.data}.</p>
      <hr />
    </div>
  );
}

export default DocumentoDeclaracao;
