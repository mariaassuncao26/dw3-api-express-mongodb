// Serviços da Games
// Aqui sera inserido os métodos para ler, cadastrar, alterar e excluir games

// Importando o Model
import Game from "../models/Games.js"

class gameService {
    // Serviço para ler os jogos
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            //  o método .find() do mongoose busca registros
            const games = await Game.find()
            return games
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
    // MÉTODO PARA CADASTRAR JOGOS
    async Create(title, year, platform, price) {
        try {
            // Enviando dados a serem cadastrados para o Model
            const newGame = new Game({
                // title : title,
                // year : year,
                // platform : platform,
                // price : price
                title,
                year,
                platform,
                price
            })
            //  Aguardar a operação de cadastro
            await newGame.save() // .save() é o método do mongoose para cadastrar
        } catch (error) {
            console.log(error)
        }
    }

    // Método para EXCLUIR um jogo
    async Delete(id) {
        try{
            await Game.findByIdAndDelete(id)
            // O método findByAndDelete do mongoose busca um registro pela ID e deleta
            console.log(`O jogo com a id ${id} foi deletado.`)
        }catch(error){
            console.log(error)
        }
    }

    // Método para alterar um jogo
    async Update(id, title, year, platform, price){
        try{
            await Game.findByIdAndUpdate(id, {
                // title : title
                title,
                year,
                platform,
                price
            })
            console.log(`O jogo com a id ${id} foi alterado.`)
        }catch (error) {
            console.log(error)
        }
    }

// ENCERRA A CLASSE
}
// Exportando a classe
export default new gameService()

