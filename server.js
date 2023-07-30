const app = require('./src/app');
const port = 9595;

// Iniciando servidor.
app.listen(port, () => console.log('Seu servidor está na porta ${port}'));