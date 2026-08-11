// Importando o Express
import express from "express";
// Carregando Express
const app = express();
// Configurações do Express
app.use(express.json());

// ROTA PRINCIPAL DA API
app.get("/", (req, res) => {
    const games = [
        {
            title: "Fifa 2019",
            year: 2019,
            platform: "X-box 360",
            price: 198
        },
        {
            title: "The Sims",
            year: 2016,
            platform: "PC (Windows)",
            price: 149
        },
        {
            title: "CS GO",
            year: 2012,
            platform: "PC (Windows)",
            price: 89
        },
    ]
    // Configurando o retorno da API
    res.status(200).json(games);
});

// Iniciando o servidor da API
const port = 4000;

app.listen(port, (error) => {
    if(error){
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    }else{
        console.log("API iniciada com sucesso na porta " + port);
    }
});