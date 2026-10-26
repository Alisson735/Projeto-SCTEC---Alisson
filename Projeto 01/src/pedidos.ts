import type { cliente } from './types';

import { carrinho, ItemCarrinho, limparCarrinho, } from './carrinho';

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


let valorTotal = 0;
for (const item of carrinho) {
valorTotal = valorTotal + (item.produto.preco * item.quantidade)
}


const novoPedido: Pedido = {
    id: proximoIdPedido,
    cliente: cliente,
    itens: carrinho,
    total: valorTotal
  };

  criarPedido(cliente);
  pedidos.push(novoPedido);

  limparCarrinho(); 
    
    return novoPedido;
}
  
export function verPedidos(): Pedido[] {
  return pedidos;
}

