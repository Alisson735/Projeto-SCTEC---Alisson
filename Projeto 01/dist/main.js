"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const clientes_1 = require("./clientes");
const produtos_1 = require("./produtos");
const pedidos_1 = require("./pedidos");
const prompt = promptSync({ sigint: true });
let escolha = 0;
do {
    console.log('1 - Cadastrar cliente');
    console.log('2 - Ver clientes');
    console.log('3 - Cadastrar produto');
    console.log('4 - Ver produtos');
    console.log('5 - Remover produto');
    console.log('6 - Efetuar um novo pedido');
    console.log('7 - Ver pedidos');
    console.log('8 - Remover um pedido');
    console.log('9 - Sair do sistema');
    let escolha = Number(prompt('O que você deseja fazer? '));
    switch (escolha) {
        case 1:
            (0, clientes_1.cadastrarCliente)();
            break;
        case 2:
            console.log('Seus clientes são: ');
            console.log((0, clientes_1.verClientes)());
            break;
        case 3:
            (0, produtos_1.cadastrarProduto)();
            break;
        case 4:
            console.log('Seus carros são');
            console.log((0, produtos_1.listarProduto)());
            break;
        case 5:
            (0, produtos_1.removerProduto)();
            break;
        case 6:
            pedidos_1.criarPedido;
            break;
        case 7:
            produtos_1.buscarProdutoPeloNome;
            console.log('Digite nome do produto!');
        case 9:
            console.log("Você escolheu sair do sistema");
            break;
        default:
            console.log('Digite uma opção válida!');
    }
} while (escolha !== 9);
//# sourceMappingURL=main.js.map