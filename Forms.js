import React, { useState } from 'react';

import './Forms.css';
function Forms() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    matrícula: '',
    idade: null,
    nome: null,
    renda: null,
    cor: null,
    sexo: null,
    escola: null,
    cep: null,
  });
  const [curso, setCurso] = useState(null);
  const [motiv, setMotiv] = useState(null);
  const [email, setEmail] = useState(null);

  const saveInfo = () => {
    fetch('http://localhost:4001/sentinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        matrícula: formData.matrícula,
        idade: formData.idade,
        nome: formData.nome,
        email: email,
        renda: formData.renda,
        cor: formData.cor,
        sexo: formData.sexo,
        ano_curso: formData.ano_curso,
        escola: formData.escola,
        cod_curso: curso,
        cep: formData.cep,
        motivacao: motiv,
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'));
  };

  const handleSubmit = async (event) => {
    const pontos =
      motiv * 3 -
      formData.renda * 2 +
      (formData.cor - 1) +
      (formData.escola - 1) +
      formData.ano_curso;

    if (pontos <= 0 || formData.renda >= 5) {
      alert('Lamento, mas você não é elegível para fazer esse pedido.');
    } else {
      event.preventDefault();
      await console.log(data);
      await saveInfo();
      alert('Seu cadastro foi enviado!');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleRaChange = (event) => {
    setFormData({ ...formData, matrícula: event.target.value });
  };
  const handleIdadeChange = (event) => {
    setFormData({ ...formData, idade: event.target.value });
  };
  const handleNomeChange = (event) => {
    setFormData({ ...formData, nome: event.target.value });
  };
  const handleRendaChange = (event) => {
    setFormData({ ...formData, renda: event.target.value });
  };
  const handleCorChange = (event) => {
    setFormData({ ...formData, cor: event.target.value });
  };
  const handleSexoChange = (event) => {
    setFormData({ ...formData, sexo: event.target.value });
  };
  const handleCursoChange = (event) => {
    setCurso(event.target.value);
  };
  const handleEscolaChange = (event) => {
    setFormData({ ...formData, escola: event.target.value });
  };
  const handleAnoChange = (event) => {
    setFormData({ ...formData, ano_curso: event.target.value });
  };
  const handleCepChange = (event) => {
    setFormData({ ...formData, cep: event.target.value });
  };

  const handleMotivChange = (event) => {
    setMotiv(event.target.value);
  };

  return (
    <div className="Forms">
      <form onSubmit={handleSubmit}>
        <div id="form" className="matricula" required>
          <label>Matrícula:</label>
          <br />
          <input
            onChange={handleRaChange}
            value={formData.matrícula}
            type="text"
            placeholder="RA"
          ></input>
        </div>

        <div id="form" className="nome">
          <label>Nome:</label>
          <br />

          <input
            onChange={handleNomeChange}
            value={formData.nome}
            type="text"
            placeholder="Nome"
          ></input>
        </div>

        <div id="form" className="email">
          <label>Email:</label>
          <br />

          <input
            onChange={handleEmailChange}
            value={email}
            type="email"
            placeholder="email"
          ></input>
        </div>

        <div id="form" className="idade">
          <label>Idade:</label>
          <br />

          <input
            onChange={handleIdadeChange}
            value={formData.idade}
            type="number"
            placeholder="Idade"
            min="1"
            max="60"
          ></input>
        </div>

        <div id="form" className="renda">
          <label>Renda (salários mínimos):</label>
          <br />

          <input
            onChange={handleRendaChange}
            value={formData.renda}
            type="number"
            placeholder="Renda"
            min="0"
          ></input>
        </div>

        <div id="form" className="cor">
          <label>Cor de pele:</label>
          <select value={formData.cor} onChange={handleCorChange}>
            <option></option>
            <option value="1">Branca</option>
            <option value="2">Preta</option>
          </select>
          <br />
        </div>

        <div id="form" className="sexo">
          <label>Sexo:</label>
          <select value={formData.sexo} onChange={handleSexoChange}>
            <option></option>
            <option value="1">Homem</option>
            <option value="2">Mulher</option>
          </select>
          <br />
        </div>

        <div id="form" className="ano_curso">
          <label>Ano do curso:</label>
          <br />

          <input
            onChange={handleAnoChange}
            value={formData.ano_curso}
            type="number"
            placeholder="ano_curso"
            min="1"
            max="7"
          ></input>
        </div>

        <div id="form" className="escola">
          <label>Escola:</label>
          <select value={formData.escola} onChange={handleEscolaChange}>
            <option></option>
            <option value="1">Pública</option>
            <option value="2">Privada</option>
          </select>
          <br />
        </div>

        <div id="form" className="curso">
          <label>Curso:</label>
          <select value={curso} onChange={handleCursoChange}>
            <option value={0}></option>
            <option value={1}>Ciência de dados e IA</option>
            <option value={2}>Direito</option>
            <option value={3}>Medicina</option>
            <option value={4}>História</option>
            <option value={5}>Administração</option>
            <option value={6}>Engenharia Biomédica</option>
            <option value={7}>Design</option>
            <option value={8}>Ciência da Computação</option>
            <option value={9}>Filosofia</option>
          </select>
          <br />
        </div>

        <div id="form" className="cep">
          <label>CEP:</label>
          <br />
          <input
            onChange={handleCepChange}
            value={formData.cep}
            type="text"
            placeholder="Cep"
          ></input>

          <div id="form" className="motiv">
            <label>Motivação (0 a 10):</label>
            <br />

            <input
              onChange={handleMotivChange}
              value={motiv}
              type="number"
              min="0"
              // max="10"
            ></input>
          </div>
          <br />

          <button type="submit" href="/lista">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
