import type { produto } from './types';

export interface ItemCarrinho {
  produto: produto;
  quantidade: number;
}

export let carrinho: ItemCarrinho[] = [];

export function adicionarAoCarrinho(produto: produto, quantidade: number): void {
  if (quantidade <= 0) {
    throw new Error('A quantidade deve ser maior que zero.');
  }
  
  if (produto.quantidade < quantidade) {
    throw new Error('Quantidade solicitada excede o estoque disponível.');
  }

  const itemExistente = carrinho.find(item => item.produto.idProduto === produto.idProduto); 
  
  if (itemExistente) {
    const novaQuantidade = itemExistente.quantidade + quantidade;
    if (produto.quantidade < novaQuantidade) {
      throw new Error('Estoque insuficiente para adicionar mais unidades deste produto.');
    }
    itemExistente.quantidade = novaQuantidade;
  } else {
    carrinho.push({ produto, quantidade });
  }
}

export function verCarrinho(): ItemCarrinho[] {
  return carrinho;
}

export function limparCarrinho(): void {
  carrinho = [];
}