import React from "react";
import { useContext } from "react";
import { Context } from "../../App";
import "./index.scss";
import thiago from "../../assets/Logo_01.png";


function DocumentoHonario(props) {
    const context = useContext(Context);
    
  return (
    <div className={`v_containerDocH`}>
      <img
        src={thiago}
        width="500"
        height="150"
        alt="logo escritório"
        className={`v_containerDocH--image`}
      />
      <h1>CONTRATO DE HONORÁRIOS ADVOCATÍCIOS</h1>
      <h3>IDENTIFICAÇÃO DAS PARTES</h3>
      <p>
        <b>CONTRATANTE: <u>{context.state.user.nome}</u></b>,
        {context.state.user.nacionalidade}, {context.state.user.estadoCivil},
        {context.state.user.ocupacao}, portador da cédula de identidade
        {context.state.user.estadoDaIdentidade}- {context.state.user.rg} SSP/
        {context.state.user.estadoDaIdentidade}
        inscrito no CPF sob o nº {context.state.user.cpf}, filho de
        {context.state.user.pai} e de {context.state.user.mae}, residente e
        domiciliado na {context.state.user.endereco},{context.state.user.cidade}
        .
      </p>
      <p>
        <b>CONTRATADO: <u>THIAGO SALES DA COSTA</u></b>, brasileiro, solteiro, advogado,
        inscrito na Ordem dos Advogados do Brasil-OAB, seccional de Minas Gerais
        sob o número 156.500, com endereço profissional na Rua: 30 C/ 13 N° 679,
        Bairro Centro, CEP 38300-084, Ituiutaba –MG.
      </p>
      <p>
        As partes acima identificadas têm, entre si, justo e acertado o presente
        CONTRATO DE HONORÁRIOS ADVOCATÍCIOS (Lei Federal nº 8.906/94, arts. 22 a
        30 e Código de Ética e Disciplina, Seção VIII, I a V), que se regerá
        pelas cláusulas seguintes e pelas condições descritas no presente
      </p>
      <h3>CLÁUSULA 1 - OBJETO DO CONTRATO</h3>
      <p>
        O presente instrumento tem como objeto a prestação de serviços
        advocatícios, relativos à {context.state.user.objetoDoContrato}, a serem
        realizados em qualquer Instância.
      </p>
      <p>
      <i>PARÁGRAFO ÚNICO</i>: ATIVIDADES: As atividades inclusas na prestação de
        serviço objeto deste instrumento são todas aquelas inerentes à
        profissão, quais sejam:
      </p>
      <p>
        a) praticar quaisquer atos e medidas necessárias e inerentes à causa,
        junto a todas as repartições públicas da União, dos Estados ou dos
        Municípios, bem como órgãos a estes ligados direta ou indiretamente,
        seja por delegação, concessão ou outros meios, bem como de
        estabelecimentos particulares.
      </p>
      <p>
        b) praticar todos os atos inerentes ao exercício da advocacia e aqueles
        constantes no Estatuto da Ordem dos Advogados do Brasil, bem como os
        especificados no <i>INSTRUMENTO PROCURATÓRIO</i>.
      </p>
      <h3>CLÁUSULA 2 - ATOS PROCESSUAIS</h3>
      <p>
        Havendo necessidade de contratação de outros profissionais, no decurso
        do processo, o CONTRATADO elaborará substabelecimento, indicando
        profissional ou escritório de seu conhecimento.
      </p>
      <p>
        <i>PARÁGRAFO ÚNICO</i>: Agindo a CONTRATANTE de forma dolosa ou culposa em face
        do CONTRATADO, restará facultado a este, substabelecer sem reserva de
        iguais e se exonerar de todas as obrigações.
      </p>
      <p>
        A CONTRATANTE não poderá em nenhum momento da referida ação contratar
        outro advogado, sob pena de pagar o valor dos honorários ao CONTRATADO
        sem o cumprimento integral do mandato.
      </p>
      <h3>CLÁUSULA 3 - REMUNERAÇÃO</h3>
      <p>
        Fica acordado entre as partes que os honorários a título de prestação de
        serviços serão pagos da seguinte forma: 30 % do valor corrigido.
      </p>
      <p>
        <i>PARÁGRAFO PRIMEIRO</i>: Deixando motivadamente, de ter o patrocínio deste
        causídico, ora contratado, ou na hipótese da CONTRATANTE vir a fazer
        acordo com a parte adversa sem o concurso do CONTRATADO, ou na hipótese
        de se cassada a procuração outorgada, e ainda caso resolva não mais
        prosseguir com a ação por motivos pessoais ou que independam da vontade
        destes seus patronos, no que se incluem a desistência da ação e a
        reconciliação, o valor prestado inicialmente na propositura da Ação
        reverter-se-á em favor do mesmo, sem prejuízo de posteriores cobranças
        judiciais, em face da CONTRATANTE; salvo se procedido acordo escrito
        entre as partes dispondo sobre valores diferenciados.
      </p>
      <p>
        <i>PARÁGRAFO SEGUNDO</i>: Os honorários de sucumbência, se for o caso,
        pertencem ao advogado, ora contratado. Caso haja morte ou incapacidade
        civil do mesmo, seus sucessores ou representante legal receberão os
        honorários na proporção do trabalho realizado.
      </p>
      <p>
        <i>PARÁGRAFO TERCEIRO</i>: Havendo acordo com a CONTRATANTE, não prejudicará o
        recebimento dos honorários contratados e da sucumbência (art. 23 da Lei
        8.906/94); caso em que os honorários iniciais e finais serão pagos ao
        CONTRATADO.
      </p>
      <p>
        <i>PARÁGRAFO QUARTO</i>: As partes estabelecem que havendo atraso no pagamento
        dos honorários, serão cobrados juros de mora na proporção de 1% (um por
        cento) ao mês.
      </p>
      <h3>CLÁUSULA 4 - FORO</h3>
      <p>
        Para dirimir quaisquer controvérsias oriundas do contrato, as partes
        elegem o foro da comarca de Ituiutaba-MG. E, por estarem assim justos e contratados, firmam o presente
        instrumento, juntamente com 2 (duas) testemunhas.
      </p>
      <p>Ituiutaba-MG {context.state.user.data}.</p>
      <div className={`v_containerDocH__signature`}>
        <div className={`v_containerDocH__signature--item`}>
          <h2>CONTRATANTE:</h2>
          <span>____________________________________________________</span>
        </div>
        <div className={`v_containerDocH__signature--item`}>
          <h2>CONTRATADO:</h2>
          <span>____________________________________________________</span>
        </div>
      </div>
      <div className={`v_containerDocH__witness`}>
        <div className={`v_containerDocH__witness--item`}>
          <h2>Testemunhas:</h2>
          <br />
        </div>
        <div className={`v_containerDocH__witness--item`}>
          <span>1.____________________________________________________</span>
          <span>2.____________________________________________________</span>
        </div>
      </div>
    </div>
  );
}

export default DocumentoHonario;
