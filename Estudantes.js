import './Estudantes.css';

function Estudantes(props) {
  const cursos = [
    '',
    'CDIA',
    'Direito',
    'Medicina',
    'História',
    'Adm.',
    'Eng. Biomédica',
    'Design',
    'Ciência da Comp.',
    'Filosofia',
  ];

  const notebook = () => {
    if (
      props.cod_curso === 1 ||
      props.cod_curso === 7 ||
      props.cod_curso === 8
    ) {
      return 'Dell';
    } else if (
      props.cod_curso === 3 ||
      props.cod_curso === 6 ||
      props.cod_curso === 2
    ) {
      return 'IdeaPad';
    } else if (
      props.cod_curso === 4 ||
      props.cod_curso === 5 ||
      props.cod_curso === 9
    ) {
      return 'Chromebook';
    }
  };

  return (
    <div>
      <div className="carta">
        <div>
          <div className="card">
            <div className="card-body">
              <h5>{props.nome}</h5>

              <h6 className="mb-2 text-muted" tag="h6">
                Matrícula: {props.matrícula}
              </h6>
              <h6 className="mb-2 text-muted" tag="h6">
                Curso: {cursos[props.cod_curso]}
              </h6>
              <h6 className="mb-2 text-muted" tag="h6">
                Notebook: {notebook()}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Estudantes;
