import React, { useContext } from "react";
import { Context } from "../../App";
import thiago from "../../assets/Logo_01.png";
import "./index.scss";
function DocumentoProcuracao() {
  const context = useContext(Context);

  return (
    <div className={`v_containerDocP`}>
      <img
        src={thiago}
        width="500"
        height="150"
        alt="logo escritório"
        className={`v_containerDocP--image`}
      />
      <h3>INSTRUMENTO PARTICULAR DE PROCURAÇÃO, COM PODERES "AD-JUDICIA"</h3>
      <p>
        <b>
          <u>Outorgante: {context.state.user.nome}</u>
        </b>
        {', '}{context.state.user.nacionalidade}{', '} {context.state.user.estadoCivil}{", "}
        {context.state.user.ocupacao}, portador da cédula de identidade{", "}
        {context.state.user.estadoDaIdentidade}-{context.state.user.rg} SSP/
        {context.state.user.estadoDaIdentidade}{", "}
        inscrito no CPF sob o nº {context.state.user.cpf}, filho de{": "}
        {context.state.user.pai} e de {context.state.user.mae}, residente e
        domiciliado na {context.state.user.endereco}{", "}{context.state.user.cidade}
        .
      </p>
      <p>
        <b>
          <u>Outorgado: Nome advogado </u>
        </b>
        , brasileiro, solteiro, advogado, inscrito na Ordem dos Advogados do
        Brasil-OAB, seccional de Minas Gerais sob o número 000.000, com endereço
        profissional na Rua: , Bairro Centro, ,
        Ituiutaba –MG.
      </p>
      <p>
        A outorgante, por este instrumento de procuração geral para o foro,
        nomeia e constitui seu bastante mandatário o outorgado, acima
        qualificado, para que, em nome deste(a), proponha qualquer ação,
        defendendo-o nas contrárias, bem como, promover quaisquer medidas
        preliminares, preventivas e assecuratórias dos seus direitos e
        interesses, procurar em qualquer repartição pública ou juízo, praticar
        quaisquer atos processuais em qualquer instância, podendo inclusive
        confessar, reconhecer a procedência do pedido, desistir, transigir,
        renunciar a direito sobre que se funda a ação, receber, dar quitação,
        firmar compromisso e todos os poderes constantes da Cláusula “ad
        judicia” e “et extra” nos termos do art. 105 do Código de Processo
        Civil, poderes para substabelecer inclusive, e{" "}
        <b>
          <u>
            Especialmente o fim de promover uma{" "}
            {context.state.user.objetoDoContrato}
          </u>
        </b>
        .
      </p>
      <br />
      <p>Ituiutaba-MG: {context.state.user.data}.</p>
      <hr />
    </div>
  );
}

export default DocumentoProcuracao;
