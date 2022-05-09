import Estudantes from './Estudantes';
import { infos } from './Infos';
import './Estudantes.css';

function Dataframe() {
  return (
    <div className="estudantes">
      <h2>Estudantes elegíveis para o pedido de Notebooks:</h2>

      {
        <div className="lista de alunos">
          {infos.map((info) => {
            return (
              <div className="estudantes-cartas">
                <Estudantes
                  escola={info.escola}
                  ano_curso={info.ano_curso}
                  renda={info.renda}
                  n={info.num}
                  nome={info.nome}
                  matrícula={info.matrícula}
                  cod_curso={info.cod_curso}
                  motivação={info.motivação}
                  pontos={info.pontos}
                />
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default Dataframe;
