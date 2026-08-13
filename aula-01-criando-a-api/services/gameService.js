// Serviços de Games
// Aqui será inserido os métodos para ler, cadastrar, alterar e excluir games

// Importando o Model
import Game from "../models/Games.js";

class gameService {
    // Serviço para ler os jogos
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            // O método .find() do mongoose busca registros
            const games = await Game.find()
            return games
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
}

// Exportando a Classe
export default new gameService();