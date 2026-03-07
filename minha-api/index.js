const express = require('express');
const app = express();

app.use(express.json());

// "Banco de dados" temporário
let viagens = [];

// Rota para testar a API
app.get('/', (req, res) => {
  res.send('API da Agencia de Viagens funcionando!');
});

// Listar viagens
app.get('/viagens', (req, res) => {
  res.json(viagens);
});

// Cadastrar viagem
app.post('/viagens', (req, res) => {
  const viagem = req.body;

  viagens.push(viagem);

  res.json({
    mensagem: 'Viagem cadastrada com sucesso',
    viagem: viagem,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
