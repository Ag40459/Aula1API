const express = require('express');
const bancodedados = {
    identificadorInstrutor: 5,
    instrutores: [
        {
            id: 1,
            nome: "Agenor",
            email: "ag@ag.com",
            status: true
        },
        { id: 2, nome: "Valentina", email: "va@va.com", status: true },
        { id: 3, nome: "Italo", email: "it@it.com", status: true },
        { id: 4, nome: "Carla", email: "ca@ca.com", status: true },

    ]
}

module.exports = bancodedados;

