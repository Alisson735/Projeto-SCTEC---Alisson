import type { cliente } from './types';

import { carrinho, ItemCarrinho, limparCarrinho } from './carrinho';

export interface Pedido {
  id: number;
  cliente: cliente;
  itens: ItemCarrinho[];
  total: number;
}

export const pedidos: Pedido [] = [];
let proximoIdPedido = 1;

export function criarPedido(cliente: cliente): Pedido {
    if (carrinho.length === 0) {
        throw new Error('O carrinho esta vazio! Adicione produtos para criar o pedido');
    }
}

let valorTotal = 0;
for (let i = 0; i < carrinho.length; i++) {
valorTotal = + (carrinho[i].produto.preco * carrinho[i].quantidade)
};
