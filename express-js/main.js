const express = require('express');
const app = express();
const port = 3000; // porta de execução do servidor

//middleware para o processamento de dados JSON
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor Express rodando na porta ${port}`)
    
})