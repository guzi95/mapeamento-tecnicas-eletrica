const app = require('./src/app')
const PORT = 9595

// Iniciando servidor.
app.listen(PORT, () => console.log('Seu servidor está na porta ${PORT}'));