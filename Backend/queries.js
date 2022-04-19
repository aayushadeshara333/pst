const Pool = require("pg").Pool
const pool = new Pool({
    host: "localhost",
    user: "aayush",
    PORT: "5432",
    password: "aayush",
    database: "node_app"
})

const getGames = (request, response) => {
    pool.query('SELECT * FROM games ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createGame = (request, response) => {
    const { player_one, player_two, winner, win_count } = request.body
    pool.query('INSERT INTO games (player_one, player_two, winner, win_count) VALUES ($1, $2, $3, $4);', [player_one, player_two, winner, win_count], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

module.exports = {
    getGames,
    createGame,
}