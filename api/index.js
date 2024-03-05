import express from 'express';
const app = express();
const port = 4000;
// Efetuando o parse do JSON
app.use(express.json());
// Rotas de conteudo público
app.use('/', express.static('public'));
// Primeira rota pública
app.get('/api', (req, res) => {
    res.status(200).json({message: "Api Ok", version: '1.0'});
});

// Tratar rotas inválidas
app.use((req, res) => {
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe!`,
            param: 'Invalid route'
        }]
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});