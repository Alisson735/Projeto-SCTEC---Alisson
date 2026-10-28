import type { cliente, } from './types';
import { procurarClienteId } from './clientes';
import promptSync = require('prompt-sync');
import { produtos } from './produtos';
const prompt = promptSync({ sigint: true });

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
    itens: [ ...carrinho ],
    total: valorTotal
  };

  
  pedidos.push(novoPedido);
  limparCarrinho(); 
  proximoIdPedido++;
  return novoPedido;
}
  
export function verPedidos(): Pedido[] {
  return pedidos;
}
export function gerenciarVerPedidos(): void {
    const listaDePedidos = verPedidos();
    if (listaDePedidos.length === 0) {
        console.log('📭 Nenhum pedido registado ainda.');
    } else {
        console.log('📋 Lista de Pedidos:', listaDePedidos);
    }  
}

 

export function iniciarCriacaoPedido(): void {
    const idCliente = Number(prompt('Digite o ID do cliente para o pedido: '));
    const clienteEncontrado = procurarClienteId(idCliente);

    if (!clienteEncontrado) {
        console.log('❌ Cliente não encontrado com esse ID!');
        return;
    }

    let continuarAdicionando = true;
    while (continuarAdicionando) {
        const idProdutoInput = Number(prompt('Digite o ID do produto que deseja adicionar ao pedido: '));
        const quantidadeInput = Number(prompt('Digite a quantidade do produto: '));

       const produtoEncontrado = produtos.find(produto => produto.idProduto === idProdutoInput);
    if (produtoEncontrado) {
      carrinho.push({ produto: produtoEncontrado, quantidade: quantidadeInput });
     } else {
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
    } catch (erro: any) {
        console.log(`⚠️ ${erro.message}`);
    }
}

export function removerPedido(): void {
  const idInput = Number(prompt('Digite o ID do pedido que deseja remover: '));
  const index = pedidos.findIndex(pedido => pedido.id === idInput);
  if (index !== - 1) {
    pedidos.splice(index, 1);
    console.log('✅ Pedido removido com sucesso!');
  } else {
    console.log('❌ Pedido não encontrado com esse ID!');
  }
}