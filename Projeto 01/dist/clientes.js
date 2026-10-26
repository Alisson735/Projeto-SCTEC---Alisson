"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = cadastrarCliente;
exports.verClientes = verClientes;
const clientes = [];
function cadastrarCliente(cliente) {
    clientes.push(cliente);
}
function verClientes() {
    return clientes;
}
//# sourceMappingURL=clientes.js.map