import type { produto } from './types';

export interface ItemCarrinho {
  produto: produto;
  quantidade: number;
}

export let carrinho: ItemCarrinho[] = [];// Cria lista do carrinho

export function adicionarAoCarrinho(produto: produto, quantidade: number): void { //Função que permite adicionar itens ao carrinho
  if (quantidade <= 0) {
    throw new Error('A quantidade deve ser maior que zero.'); //Exige que seja maior que zero, validando uma quantidade minima
  }
  
  if (produto.quantidade < quantidade) {
    throw new Error('Quantidade solicitada excede o estoque disponível.');// Valida se o produto tem em estoque disponivel
  }

  const itemExistente = carrinho.find(item => item.produto.idProduto === produto.idProduto); //Para ver se o produto ja consta no carrinho ou não
  
  if (itemExistente) {
    const novaQuantidade = itemExistente.quantidade + quantidade;
    if (produto.quantidade < novaQuantidade) {
      throw new Error('Estoque insuficiente para adicionar mais unidades deste produto.');
    }
    itemExistente.quantidade = novaQuantidade;
  } else {
    carrinho.push({ produto, quantidade });
  }
} //Atualiza ou coloca o item

export function verCarrinho(): ItemCarrinho[] {  //Retorna os itens atuais
  return carrinho;
}

export function limparCarrinho(): void { //Esvazia o carrinho
  carrinho = [];
}