"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrinho = void 0;
exports.adicionarAoCarrinho = adicionarAoCarrinho;
exports.verCarrinho = verCarrinho;
exports.limparCarrinho = limparCarrinho;
exports.carrinho = []; // Cria lista do carrinho
function adicionarAoCarrinho(produto, quantidade) {
    if (quantidade <= 0) {
        throw new Error('A quantidade deve ser maior que zero.'); //Exige que seja maior que zero, validando uma quantidade minima
    }
    if (produto.quantidade < quantidade) {
        throw new Error('Quantidade solicitada excede o estoque disponível.'); // Valida se o produto tem em estoque disponivel
    }
    const itemExistente = exports.carrinho.find(item => item.produto.idProduto === produto.idProduto); //Para ver se o produto ja consta no carrinho ou não
    if (itemExistente) {
        const novaQuantidade = itemExistente.quantidade + quantidade;
        if (produto.quantidade < novaQuantidade) {
            throw new Error('Estoque insuficiente para adicionar mais unidades deste produto.');
        }
        itemExistente.quantidade = novaQuantidade;
    }
    else {
        exports.carrinho.push({ produto, quantidade });
    }
} //Atualiza ou coloca o item
function verCarrinho() {
    return exports.carrinho;
}
function limparCarrinho() {
    exports.carrinho = [];
}
//# sourceMappingURL=carrinho.js.map