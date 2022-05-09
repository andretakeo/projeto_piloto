const express = require('express');
const app = express();
const port = 4001;

var bp = require('body-parser');

const cors = require('cors');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'atfujiwara',
    password: '1602176634',
    database: 'trabalho2',
  },
});

app.get('/pyemail', (req, res) => {
  db.select('*')
    .from('sent')
    .orderBy('id', 'asc')
    .then((data) => {
      res.json(data);
    });
});

app.get('/sentinfo', (req, res) => {
  db.select('*')
    .from('sent')
    .orderBy('pontos', 'desc')
    .then((data) => {
      res.json(data);
    });
});

// matrícula,
// idade,
// nome,
// renda,
// cor,
// sexo,
// ano_curso,
// escola,
// cod_curso,
// cep,
// motivação,

// matrícula: matrícula,
// idade: idade,
// nome: nome,
// renda: renda,
// cor: cor,
// sexo: sexo,
// ano_curso: ano_curso,
// escola: escola,
// cod_curso: cod_curso,
// cep: cep,
// motivação: motivação,

app.post('/sentinfo', (req, res) => {
  const {
    matrícula,
    idade,
    email,
    nome,
    renda,
    cor,
    sexo,
    ano_curso,
    escola,
    cod_curso,
    cep,
    motivacao,
  } = req.body;
  db('sent')
    .returning('*')
    .insert({
      matrícula: matrícula,
      email: email,
      idade: idade,
      nome: nome,
      renda: renda,
      cor: cor,
      sexo: sexo,
      ano_curso: ano_curso,
      escola: escola,
      cod_curso: cod_curso,
      cep: cep,
      motivacao: motivacao,
      pontos: renda * 2 + (cor - 1) + (escola - 1) + ano_curso,
    })
    .then(console.log)
    .catch((err) => console.log(err));
  res.json(
    matrícula,
    nome,
    idade,
    renda,
    cor,
    sexo,
    ano_curso,
    escola,
    cod_curso,
    cep
  );
});

app.get('/oi', (req, res) => {
  db.select('*')
    .from('estudantes')
    .then((data) => {
      res.json(data);
    });
});

app.get('/oi/:id', (req, res) => {
  const { id } = req.params;

  db.select('*')
    .from('estudantes')
    .where({
      id: id,
    })
    .then((data) => {
      res.json(data[0]);
    });

  //   if (!found) {
  //     res.status(400).json('not found');
  //   }
});

[
  {
    index: '8',
    matrícula: 'RA55000009',
    nome: 'Simael Palhares Borges Garcia',
    idade: '19',
    renda: '0',
    cor: '2',
    sexo: '1',
    ano_curso: '3',
    escola: '1',
    cod_curso: '9',
    logradouro: 'Rua Duque da Terceira',
    numero: '930',
    bairro: 'Jardim Maristela',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '02807-030',
    motivação: '10',
    pontos: '34',
  },
];

app.post('/sending', (req, res) => {
  const {
    index,
    matrícula,
    nome,
    idade,
    renda,
    cor,
    sexo,
    ano_curso,
    escola,
    cod_curso,
    logradouro,
    numero,
    bairro,
    cidade,
    uf,
    cep,
    motivação,
    pontos,
  } = req.body;
  db('estudantes-elegiveis')
    .returning('*')
    .insert({
      id: index,
      matrícula: matrícula,
      nome: nome,
      idade: idade,
      renda: renda,
      cor: cor,
      sexo: sexo,
      ano_curso: ano_curso,
      escola: escola,
      cod_curso: cod_curso,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      cep: cep,
      motivação: motivação,
      pontos: pontos,
    })
    .then(console.log);
  res.json(
    index,
    matrícula,
    nome,
    idade,
    renda,
    cor,
    sexo,
    ano_curso,
    escola,
    cod_curso,
    logradouro,
    numero,
    bairro,
    cidade,
    uf,
    cep,
    motivação,
    pontos
  );
});

// app.post('/', (req, res) => {
//   const {
//     matrícula,
//     nome,
//     idade,
//     renda,
//     cor,
//     sexo,
//     ano_curso,
//     escola,
//     cod_curso,
//     logradouro,
//     numero,
//     bairro,
//     cidade,
//     uf,
//     cep,
//     motivação,
//   } = req.body;
//   db('estudantes')
//     .returning('*')
//     .insert({
//       matrícula: matrícula,
//       nome: nome,
//       idade: idade,
//       renda: renda,
//       cor: cor,
//       sexo: sexo,
//       ano_curso: ano_curso,
//       escola: escola,
//       cod_curso: cod_curso,
//       logradouro: logradouro,
//       numero: numero,
//       bairro: bairro,
//       cidade: cidade,
//       uf: uf,
//       cep: cep,
//       motivação: motivação,
//     })
//     .then(console.log);
//   res.json(
//     matrícula,
//     nome,
//     idade,
//     renda,
//     cor,
//     sexo,
//     ano_curso,
//     escola,
//     cod_curso,
//     logradouro,
//     numero,
//     bairro,
//     cidade,
//     uf,
//     cep,
//     motivação
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
