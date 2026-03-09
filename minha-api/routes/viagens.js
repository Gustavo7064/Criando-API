const express = require('express');
const router = express.Router();

// "Banco de dados" temporário
let viagens = [];

// listar viagens
router.get('/', (req, res) => {
  res.json(viagens);
});

// cadastrar viagem
router.post('/', (req, res) => {
  const viagem = req.body;

  viagens.push(viagem);

  res.json({
    mensagem: 'Viagem cadastrada com sucesso',
    viagem: viagem,
  });
});

module.exports = router;
