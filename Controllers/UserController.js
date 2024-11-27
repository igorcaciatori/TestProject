const database = require("../db/connection");

class UserController {

    async createUser(req, res) {
        const { email, username, password } = req.body;

        database.insert({ email, username, password }).table("users")
            .then((data) => {
                res.json({ message: `User ${username} sucessfully created!` });
            })
            .catch((e) => res.status(500).json({ 'error': e }));
    }

    async selectAllUsers(req, res) {
        database.select('*').table('users')
            .then((users) => {
                res.json(users);
            })
            .catch((e) => res.status(500).json({ 'error': e }));
    }

    async selectOneUser(req, res) {
        const name = req.params.name;

        database.select('*').table('users').where({ 'name': name })
            .then((user) => {
                res.json(user);
            })
            .catch((e) => res.status(500).json({ 'error': e }));
    }

    async updateUser(req, res) {
        const id = req.params.id;
        const { password } = req.body;

        database.update({ 'password': password }).table('users').where({ 'id': id })
            .then(() => {
                res.json({ message: `Password updated.` });
            })
            .catch((e) => res.status(500).json({ 'error': e }));
    }

    async deleteUser(req, res) {
        const id = req.params.id;

        database.del().table('users').where({ 'id': id })
            .then(() => {
                res.json({ message: `Usuário de id ${id} deletado com sucesso.` });
            })
            .catch((e) => res.status(500).json({ 'error': e }));
    }
}

module.exports = new UserController();