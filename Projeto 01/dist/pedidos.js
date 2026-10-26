"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidos = void 0;
exports.criarPedido = criarPedido;
exports.verPedidos = verPedidos;
const carrinho_1 = require("./carrinho");
exports.pedidos = [];
let proximoIdPedido = 1;
function criarPedido(cliente) {
    if (carrinho_1.carrinho.length === 0) {
        throw new Error('O carrinho esta vazio! Adicione produtos para criar o pedido');
    }
    let valorTotal = 0;
    for (const item of carrinho_1.carrinho) {
        valorTotal = valorTotal + (item.produto.preco * item.quantidade);
    }
    const novoPedido = {
        id: proximoIdPedido,
        cliente: cliente,
        itens: carrinho_1.carrinho,
        total: valorTotal
    };
    criarPedido(cliente);
    exports.pedidos.push(novoPedido);
    (0, carrinho_1.limparCarrinho)();
    return novoPedido;
}
function verPedidos() {
    return exports.pedidos;
}
//# sourceMappingURL=pedidos.js.map