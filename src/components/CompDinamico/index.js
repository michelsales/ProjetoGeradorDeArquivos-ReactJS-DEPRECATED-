import React, { useState, useContext } from "react";
import "./index.scss";
import { Context } from "../../App";
import { MaskCpf, MaskRG } from "../../utils/Mask";
import { Link } from "react-router-dom";


export const FirstForm = (props) => {
  const context = useContext(Context);

  const { firstActive } = props;
  const { secondActive } = props;
  const [nome, setNome] = useState();
  const [nacionalidade, setNacionalidade] = useState();
  const [estadoCivil, setEstadoCivil] = useState();
  const [ocupacao, setOcupacao] = useState();

  function activeSecondForm() {
    firstActive(false);
    secondActive(true);
    handleValue();
  }

  function handleValue(e) {
    context.dispatch({
      type: "REGISTER_USER",
      payload: {
        nome: nome.toUpperCase(),
        nacionalidade: nacionalidade,
        estadoCivil: estadoCivil,
        ocupacao: ocupacao,
      },
    });
  }

  return (
    <div className={`v_compDynamic`}>
      <h2>Informações básicas:</h2>
      <input
        type="text"
        placeholder="Nome:"
        className={`v_compDynamic__camp`}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nacionalidade: "
        className={`v_compDynamic__camp`}
        onChange={(e) => setNacionalidade(e.target.value)}
        required
      />
      <div className={`v_compDynamic__small`}>
        <input
          type="text"
          placeholder="Estado Civil:"
          className={`v_compDynamic__small--camp`}
          onChange={(e) => setEstadoCivil(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ocupação:"
          className={`v_compDynamic__small--camp`}
          onChange={(e) => setOcupacao(e.target.value)}
          required
        />
      </div>
      {nome && nacionalidade && estadoCivil && ocupacao ? (
        <button
          type="submit"
          onClick={() => activeSecondForm()}
          className={`v_compDynamic__buttonComp`}
        >
          Próximo
        </button>
      ) : (
        <button
          type="submit"
          className={`v_compDynamic__buttonComp--disabled`}
          disabled
        >
          PREENCHA TODOS OS CAMPOS
        </button>
      )}

      <div className={`v_compDynamic__progress`}>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--notActive`}></div>
        <div className={`v_compDynamic__progress--notActive`}></div>
        <div className={`v_compDynamic__progress--notActive`}></div>
      </div>
    </div>
  );
};

export const SecondForm = (props) => {
  const { firstActive, secondActive, thirdActive } = props;
  const context = useContext(Context);
  const [rg, setRg] = useState();
  const [estadoDaIdentidade, setEstadoDaIdentidade] = useState();
  const [cpf, setCpf] = useState();

  function handleValue(e) {
    context.dispatch({
      type: "REGISTER_USER",
      payload: { rg: rg, estadoDaIdentidade: estadoDaIdentidade.toUpperCase(), cpf: cpf },
    });
  }

  function activeFirstForm() {
    firstActive(true);
    secondActive(false);
  }

  function activeThirdForm() {
    thirdActive(true);
    secondActive(false);
    handleValue();
  }

  return (
    <div className={`v_compDynamic`}>
      <h2>Documentos:</h2>
      <input
        type="number"
        placeholder="RG: sem pontos e traços "
        className={`v_compDynamic__camp`}
        onChange={(e) => setRg(MaskRG(e.target.value))}
        maxLength="11"
        required
      />
      <input
        type="text"
        placeholder="Estado da Identidade: "
        className={`v_compDynamic__camp`}
        onChange={(e) => setEstadoDaIdentidade(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="CPF: sem pontos e traços "
        className={`v_compDynamic__camp`}
        onChange={(e) => setCpf(MaskCpf(e.target.value))}
        required
      />
      <div className={`v_compDynamic__containerButtons`}>
        <button
          type="submit"
          onClick={() => activeFirstForm()}
          className={`v_compDynamic__containerButtons--buttonBack`}
        >
          Voltar
        </button>
        {rg && estadoDaIdentidade && cpf ? (
          <button
            type="submit"
            onClick={() => activeThirdForm()}
            className={`v_compDynamic__containerButtons--buttonNext`}
          >
            Próximo
          </button>
        ) : (
          <button
            type="submit"
            className={`v_compDynamic__containerButtons--buttonNext__disabled`}
          >
            PREENCHA TODOS OS CAMPOS
          </button>
        )}
      </div>
      <div className={`v_compDynamic__progress`}>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--notActive`}></div>
        <div className={`v_compDynamic__progress--notActive`}></div>
      </div>
    </div>
  );
};

export const ThirdForm = (props) => {
  const { secondActive, thirdActive, fourActive } = props;
  const [pai, setPai] = useState();
  const [mae, setMae] = useState();
  const [objetoDoContrato, setObjetoDoContrato] = useState();

  const context = useContext(Context);
  function activeSecondForm() {
    secondActive(true);
    thirdActive(false);
  }
  function activeFourForm() {
    thirdActive(false);
    fourActive(true);
    handleValue();
  }

  function handleValue(e) {
    context.dispatch({
      type: "REGISTER_USER",
      payload: { pai: pai.toUpperCase(), mae: mae.toUpperCase(), objetoDoContrato: objetoDoContrato },
    });
  }
  return (
    <div className={`v_compDynamic`}>
      <h2>Parentes e objeto de contrato:</h2>
      <input
        type="text"
        placeholder="Pai:"
        className={`v_compDynamic__camp`}
        onChange={(e) => setPai(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Mãe: "
        className={`v_compDynamic__camp`}
        onChange={(e) => setMae(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Objeto do Contrato: "
        className={`v_compDynamic__camp`}
        onChange={(e) => setObjetoDoContrato(e.target.value)}
        required
      />
      <div className={`v_compDynamic__containerButtons`}>
        <button
          type="submit"
          onClick={() => activeSecondForm()}
          className={`v_compDynamic__containerButtons--buttonBack`}
          required
        >
          Voltar
        </button>
        {pai && mae && objetoDoContrato ? (
          <button
            type="submit"
            onClick={() => activeFourForm()}
            className={`v_compDynamic__containerButtons--buttonNext`}
          >
            Próximo
          </button>
        ) : (
          <button
            className={`v_compDynamic__containerButtons--buttonNext__disabled`}
          >
            PREENCHER TODOS OS CAMPOS
          </button>
        )}
      </div>
      <div className={`v_compDynamic__progress`}>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--notActive`}></div>
      </div>
    </div>
  );
};

export const FourForm = (props) => {
  const { thirdActive, fourActive, tipo } = props;

  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [data, setData] = useState();
  const context = useContext(Context);

  function activeThirdForm() {
    thirdActive(true);
    fourActive(false);
  }


  function handleValue(e) {
    context.dispatch({
      type: "REGISTER_USER",
      payload: { endereco: endereco, cidade: cidade, data: data },
    });
  }

  return (
    <div className={`v_compDynamic`}>
      <h2>Endereço e data:</h2>
      <input
        type="text"
        placeholder="Endereço:"
        className={`v_compDynamic__camp`}
        onChange={(e) => setEndereco(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="cidade: "
        className={`v_compDynamic__camp`}
        onChange={(e) => setCidade(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data: "
        className={`v_compDynamic__camp`}
        onChange={(e) => setData(e.target.value)}
        required
      />
      <div className={`v_compDynamic__containerButtons`}>
        <button
          type="submit"
          onClick={() => activeThirdForm()}
          className={`v_compDynamic__containerButtons--buttonBack`}
        >
          Voltar
        </button>
        {(endereco && cidade &&  data) ? 
          (
            <Link to={`./${tipo}`}
              type="submit"
              className={`v_compDynamic__containerButtons--buttonNext`}
              onClick={handleValue}
            >
              Gerar {tipo}
            </Link>
          )
           :
           ( <button
              type="submit"
              className={`v_compDynamic__containerButtons--buttonNext__disabled`}
            >
              PREENCHA TODOS OS CAMPOS
            </button>)
        }
      </div>
      <div className={`v_compDynamic__progress`}>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--active`}></div>
        <div className={`v_compDynamic__progress--active`}></div>
      </div>
    </div>
  );
};

export const Documento = (props) => {
  const context = useContext(Context);
  return (
    <div>
      <h5>Documento</h5>
      {context.state.user.nome}
      {context.state.user.nacionalidade}
      {context.state.user.estadoCivil}
      {context.state.user.ocupacao}
      {context.state.user.rg}
      {context.state.user.estadoDaIdentidade}
      {context.state.user.cpf}
      {context.state.user.pai}
      {context.state.user.mae}
      {context.state.user.objetoDoContrato}
      {context.state.user.endereco}
      {context.state.user.cidade}
      {context.state.user.data}
   </div>
  );
};


function CompDinamico(props) {
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourActive, setFourActive] = useState(false);
  const { tipo } = props;
  return (
    <div>
      {firstActive && (
        <FirstForm
          firstActive={(firstActive) => setFirstActive(firstActive)}
          secondActive={(secondActive) => setSecondActive(secondActive)}
        />
      )}
      {secondActive && (
        <SecondForm
          firstActive={(firstActive) => setFirstActive(firstActive)}
          secondActive={(secondActive) => setSecondActive(secondActive)}
          thirdActive={(thirdActive) => setThirdActive(thirdActive)}
        />
      )}

      {thirdActive && (
        <ThirdForm
          secondActive={(secondActive) => setSecondActive(secondActive)}
          thirdActive={(thirdActive) => setThirdActive(thirdActive)}
          fourActive={(fourActive) => setFourActive(fourActive)}
        />
      )}

      {fourActive && (
        <FourForm
          thirdActive={(thirdActive) => setThirdActive(thirdActive)}
          fourActive={(fourActive) => setFourActive(fourActive)}
          tipo={tipo}
        />
      )}
    </div>
  );
}

export default CompDinamico;
