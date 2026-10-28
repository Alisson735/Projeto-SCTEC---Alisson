"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtos = void 0;
exports.cadastrarProduto = cadastrarProduto;
exports.listarProduto = listarProduto;
exports.buscarProdutoPeloNome = buscarProdutoPeloNome;
exports.buscarProdutoPeloPreco = buscarProdutoPeloPreco;
exports.removerProduto = removerProduto;
exports.iniciarBuscaProduto = iniciarBuscaProduto;
const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });
exports.produtos = [
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
    if (exports.produtos.find((produto) => {
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
function buscarProdutoPeloNome(nome) {
    return exports.produtos.filter((p) => {
        return p.nome.toLowerCase().includes(nome.toLowerCase());
    });
}
function iniciarBuscaProduto() {
    const nomeBusca = prompt('Digite o nome do produto: ');
    const resultados = buscarProdutoPeloNome(nomeBusca); // Chama a função de cima
    if (resultados.length === 0) {
        console.log('❌ Nenhum produto encontrado com esse nome.');
    }
    else {
        console.log('📦 Produtos encontrados:', resultados);
    }
}
function adicionarProduto(produto) {
    exports.produtos.push(produto);
    console.log('Produto cadastrado com sucesso');
    return true;
}
function removerProduto() {
    const idInput = Number(prompt('Digite o id do qual você deseja excluir'));
    const produtoIndex = exports.produtos.findIndex((produto) => produto.idProduto === idInput);
    exports.produtos.splice(produtoIndex);
    console.log('Produto removido com sucesso');
}
function buscarProdutoPeloPreco(preco) {
    return exports.produtos.filter((produto) => {
        return produto.preco <= preco;
    });
}
function listarProduto() {
    return exports.produtos;
}
//# sourceMappingURL=produtos.js.map