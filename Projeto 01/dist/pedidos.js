"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidos = void 0;
exports.criarPedido = criarPedido;
exports.verPedidos = verPedidos;
exports.gerenciarVerPedidos = gerenciarVerPedidos;
exports.iniciarCriacaoPedido = iniciarCriacaoPedido;
exports.removerPedido = removerPedido;
const clientes_1 = require("./clientes");
const promptSync = require("prompt-sync");
const produtos_1 = require("./produtos");
const prompt = promptSync({ sigint: true });
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
        itens: [...carrinho_1.carrinho],
        total: valorTotal
    };
    exports.pedidos.push(novoPedido);
    (0, carrinho_1.limparCarrinho)();
    proximoIdPedido++;
    return novoPedido;
}
function verPedidos() {
    return exports.pedidos;
}
function gerenciarVerPedidos() {
    const listaDePedidos = verPedidos();
    if (listaDePedidos.length === 0) {
        console.log('📭 Nenhum pedido registado ainda.');
    }
    else {
        console.log('📋 Lista de Pedidos:', listaDePedidos);
    }
}
function iniciarCriacaoPedido() {
    const idCliente = Number(prompt('Digite o ID do cliente para o pedido: '));
    const clienteEncontrado = (0, clientes_1.procurarClienteId)(idCliente);
    if (!clienteEncontrado) {
        console.log('❌ Cliente não encontrado com esse ID!');
        return;
    }
    let continuarAdicionando = true;
    while (continuarAdicionando) {
        const idProdutoInput = Number(prompt('Digite o ID do produto que deseja adicionar ao pedido: '));
        const quantidadeInput = Number(prompt('Digite a quantidade do produto: '));
        const produtoEncontrado = produtos_1.produtos.find(produto => produto.idProduto === idProdutoInput);
        if (produtoEncontrado) {
            carrinho_1.carrinho.push({ produto: produtoEncontrado, quantidade: quantidadeInput });
        }
        else {
            console.log('❌ Produto não encontrado com esse ID!');
        }
        const resposta = prompt('Deseja adicionar outro produto ao pedido? (s/n): ');
        if (resposta.toLowerCase() !== 's') {
            continuarAdicionando = false;
        }
    }
    try {
        criarPedido(clienteEncontrado);
        console.log('✅ Pedido criado com sucesso!');
    }
    catch (erro) {
        console.log(`⚠️ ${erro.message}`);
    }
}
function removerPedido() {
    const idInput = Number(prompt('Digite o ID do pedido que deseja remover: '));
    const index = exports.pedidos.findIndex(pedido => pedido.id === idInput);
    if (index !== -1) {
        exports.pedidos.splice(index, 1);
        console.log('✅ Pedido removido com sucesso!');
    }
    else {
        console.log('❌ Pedido não encontrado com esse ID!');
    }
}
//# sourceMappingURL=pedidos.js.map