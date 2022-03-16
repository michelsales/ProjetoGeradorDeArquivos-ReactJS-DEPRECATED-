import React, { useState } from "react";
import Icone from "../../assets/icone.png";
import declaracao from "../../assets/declaracao.svg";
import honorarios from "../../assets/honorarios.svg";
import procuracao from "../../assets/procuracao.svg";
import "./index.scss";
import DocHonorario from "../../components/DocHonorario";
import DocProcuracao from "../../components/DocProcuracao";
import DocDeclaracao from "../../components/DocDeclaracao";

function Dashboard(props) {
  const [honorariosAtivos, setHonarioAtivos] = useState(false);
  const [declaracoesAtivas, setDeclaracoesAtivas] = useState(false);
  const [procuracoesAtivas, setProcuracoesAtivas] = useState(false);

  return (
    <>
      {honorariosAtivos ? (
        <DocHonorario
          honorariosAtivos={(honorariosAtivos) =>
            setHonarioAtivos(honorariosAtivos)
          }
        />
      ) : (
        ""
      )}
      {declaracoesAtivas ? (
        <DocDeclaracao
          declaracoesAtivas={(declaracoesAtivas) =>
            setDeclaracoesAtivas(declaracoesAtivas)
          }
        />
      ) : (
        ""
      )}
      {procuracoesAtivas ? (
        <DocProcuracao
          procuracoesAtivas={(procuracoesAtivas) =>
            setProcuracoesAtivas(procuracoesAtivas)
          }
        />
      ) : (
        ""
      )}

      <div className={`v_dash`}>
        <header className={`v_dash__header`}>
          <img src={Icone} width="40" height="51" alt="icone" />
          <h3>Thiago Sales</h3>
        </header>
        <div className={`v_dash__choice`}>
          <h1>Documentos:</h1>
          <section className={`v_dash__choice--docs`}>
            <div
              className={`v_dash__choice--docs__item`}
              onClick={() => setHonarioAtivos(true)}
            >
              <h4>Gerar Contrato de honrários:</h4>
              <img src={honorarios} width="240" height="178" alt="" />
            </div>
            <div
              className={`v_dash__choice--docs__item`}
              onClick={() => setDeclaracoesAtivas(true)}
            >
              <h4>Declaração:</h4>
              <img src={declaracao} width="240" height="178" alt="" />
            </div>
            <div
              className={`v_dash__choice--docs__item`}
              onClick={() => setProcuracoesAtivas(true)}
            >
              <h4>Procuração:</h4>
              <img src={procuracao} width="240" height="178" alt="" />
            </div>
          </section>
        </div>
        <div className={`v_dash__footer`}>
          <p>All rights reserved to thiago sales @2021</p>
          <img src={Icone} width="40" height="51" alt="icone" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
