const express = require('express');;
const instrutores = require('./controladores/instrutores')
const rotas = express();


rotas.get('/instrutores', instrutores.listaInstrutores);
rotas.get('/instrutores/:id', instrutores.localizarInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);


module.exports = rotas;
