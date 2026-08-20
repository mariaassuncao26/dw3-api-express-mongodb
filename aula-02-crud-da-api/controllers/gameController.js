// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from '../services/gameService.js';
// Importando o ObjectId do mongodb
import { ObjectId } from 'mongodb';

// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os jogos. Erro interno do servidor.' })
    }
}

// Função que ira tratar a requisição para cadastrar os jogos
const createGame = async (req, res) => {
    try{
        // const title = req.body.title
        // Coletando dados enviados (formulario, da requisição, etc) e gravando
        const {title, year, platform, price} = req.body 
        // Enviando os dados para o service cadastrar
        await gameService.Create(title, year, platform, price)
        res.status(201).json({message: "Jogo cadastrado com sucesso!"})
        // Cod. 201 (CREATED) -> Recurso criado com sucesso no servidor

    } catch {
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor."})
    }
}
// Função que trata a requisição para EXCLUIR um jogo
const deleteGame = async (req, res) => {
    try{
        // Coletando a ID sa rota
        const id = req.params.id;
        // Fazendo a validação do ObjectId
        if(ObjectId.isValid(id)){
            await gameService.Delete(id);
            res.sendStatus(204);
            // Cód. 204 (NO CONTENT) : Requisição bem sucedida, porém não há conteúdo para retornar.
        }
        else {
            res.status(400).json({error: 'Requisição mal formada, ID inválido.'})
            // Cod. 400 : BAD REQUEST
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.'})
    }
}

// Função que trata a requisição para ALTERAR um jogo
const updateGame = async (req, res) => {
    try{
        // Coletando a ID da rota
        const id = req.params.id
        // Validando o ObjectId
        if(ObjectId.isValid(id)){
            // Coletando os dados que serão alterados
            const {title, year, platform, price} = req.body
            // Enviando os dados para o service
            await gameService.Update(id, title, year, platform, price);
            res.status(200).json({ message : 'Jogo atualizado com sucesso'})
        }
        else {
            res.status(400).json({error : 'Requisição mal formada, ID inválido.'})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error : 'Erro interno no servidor.'})
    }
}

// Exportando as funções
export default { getAllGames, createGame, deleteGame, updateGame }