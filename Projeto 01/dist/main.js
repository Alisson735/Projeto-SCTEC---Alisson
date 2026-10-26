"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const clientes_1 = require("./clientes");
const prompt = promptSync({ sigint: true });
const nomeInput = prompt('Digite nome do cliente');
const idadeInput = Number(prompt('Digite a idade do cliente'));
const novoCliente = {
    nome: nomeInput,
    idade: idadeInput,
};
(0, clientes_1.cadastrarCliente)(novoCliente);
console.log((0, clientes_1.verClientes)());
//# sourceMappingURL=main.js.map