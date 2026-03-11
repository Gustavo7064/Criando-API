import express from 'express';

const app = express();

app.get('/usuarios', (req, res) => {
  res.send('Deu certo');
});

app;
/* 1) tipo de rota / metodo http
2) endereco da rota

*/
