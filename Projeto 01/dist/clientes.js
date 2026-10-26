"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = cadastrarCliente;
exports.verClientes = verClientes;
exports.procurarClienteId = procurarClienteId;
const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });
const clientes = [];
function cadastrarCliente() {
    const nomeInput = prompt('Digite nome do cliente');
    const emailInput = prompt('Digite o email do cliente');
    const idInput = Number(prompt('Digite o ID do cliente:'));
    const novoCliente = {
        nome: nomeInput,
        email: emailInput || '',
        id: idInput,
    };
    adicionarALista(novoCliente);
}
function adicionarALista(cliente) {
    if (cliente.nome === '') {
        console.log('O nome do cliente deve ser preenchido!');
        return false;
    }
    clientes.push(cliente);
    console.log('Cliente cadastrado com sucesso');
    return true;
}
function verClientes() {
    return clientes;
}
function procurarClienteId(id) {
    return clientes.find(cliente => cliente.id === id);
}
//# sourceMappingURL=clientes.js.map