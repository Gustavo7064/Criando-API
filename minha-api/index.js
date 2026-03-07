const express = require('express');
const app = express();

const viagensRoutes = require('./routes/viagens');

app.use(express.json());

// rota de teste
app.get('/', (req, res) => {
  res.send('API da Agencia de Viagens funcionando!');
});

// usar as rotas de viagens
app.use('/viagens', viagensRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
