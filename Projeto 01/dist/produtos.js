"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProduto = cadastrarProduto;
exports.listarProduto = listarProduto;
exports.buscarProdutoPeloNome = buscarProdutoPeloNome;
exports.buscarProdutoPeloPreco = buscarProdutoPeloPreco;
exports.removerProduto = removerProduto;
const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });
const relatorios_1 = require("./relatorios");
const produtos = [
    {
        nome: 'Mouse Gamer blueDragon',
        quantidade: 22,
        idProduto: 1,
        preco: 65.00,
    },
    {
        nome: 'Teclado Gamer BlueDragon',
        quantidade: 15,
        idProduto: 2,
        preco: 350.00
    },
    {
        nome: 'Monitor Gamer BlueDragon',
        quantidade: 35,
        idProduto: 3,
        preco: 750.00
    },
    {
        nome: 'Cadeira Gamer BlueDragon',
        quantidade: 10,
        idProduto: 4,
        preco: 500.00
    },
    {
        nome: 'Redset Gamer BlueDragon',
        quantidade: 25,
        idProduto: 5,
        preco: 175.00
    },
    {
        nome: 'Gabinete Gamer BlueDragon',
        quantidade: 40,
        idProduto: 6,
        preco: 125.00
    },
];
function cadastrarProduto() {
    const nomeDoProdutoInput = String(prompt('Digite o nome do produto '));
    const idDoProdutoInput = Number(prompt('Digite o id do produto '));
    const quantidadeDoProdutoInput = Number(prompt('Digite a quantidade do produto '));
    const precoDoProdutoInput = Number(prompt('Digite o preco do produto '));
    if (produtos.find((produto) => {
        return produto.idProduto === idDoProdutoInput;
    })) {
        console.log('Já existe produto com esse ID');
        return;
    }
    const novoProduto = {
        nome: nomeDoProdutoInput,
        idProduto: idDoProdutoInput,
        quantidade: quantidadeDoProdutoInput,
        preco: precoDoProdutoInput,
    };
    adicionarProduto(novoProduto);
}
function adicionarProduto(produto) {
    if (!(0, relatorios_1.validaTexto)(produto.nome) || !(0, relatorios_1.validaTexto)(produto.nome)) {
        return false;
    }
    produtos.push(produto);
    console.log('Produto cadastrado com sucesso');
    return true;
}
function buscarProdutoPeloNome(nome) {
    return produtos.filter((prod) => {
        return prod.nome.toLowerCase().includes(nome.toLowerCase());
    });
}
function removerProduto() {
    const idInput = Number(prompt('Digite o id do qual você deseja excluir'));
    const produtoIndex = produtos.findIndex((produto) => produto.idProduto === idInput);
    produtos.splice(produtoIndex);
    console.log('Produto removido com sucesso');
}
function buscarProdutoPeloPreco(preco) {
    return produtos.filter((produto) => {
        return produto.preco <= preco;
    });
}
function listarProduto() {
    return produtos;
}
//# sourceMappingURL=produtos.js.map