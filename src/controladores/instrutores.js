const { send } = require('express/lib/response');
const { instrutores } = require('../bancodedados');
let { identificadorInstrutor } = require('../bancodedados');

const listaInstrutores = (req, res) => {
    return res.json(instrutores);
}


const localizarInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((leitorInstrutores) => {
        return leitorInstrutores.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não localizado' });
    }

    return res.status(200).json(instrutor)
}

const cadastrarInstrutor = (req, res) => {
    // const { nome, email, status } = req.body;
    let prxId = 5;
    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }
    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório' })
    }
    const instrutor = {
        id: prxId,
        nome: req.body.nome,
        email: req.body.email,
        status: req.body.status
    }
    instrutores.push(instrutor);
    prxId++
    return res.status(201).json(instrutor);
}
const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const reqBody = req.body;
    console.log(reqBody);

}
module.exports = {
    listaInstrutores,
    localizarInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor
}