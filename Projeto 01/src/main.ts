import promptSync = require('prompt-sync');
import { cadastrarCliente, verClientes } from './clientes';
import { cadastrarProduto, listarProduto, removerProduto, iniciarBuscaProduto, } from './produtos';
import type { cliente } from './types';
import { iniciarCriacaoPedido, gerenciarVerPedidos, removerPedido, verPedidos } from './pedidos';

const prompt = promptSync({sigint: true});

let escolha: number = 0;

do {
    console.log('\n--- MENU ---');
    console.log('1 - Cadastrar cliente');
    console.log('2 - Ver clientes');
    console.log('3 - Cadastrar produto');
    console.log('4 - Ver produtos');
    console.log('5 - Remover produto');
    console.log('6 - Efetuar um novo pedido');
    console.log('7 - Ver pedidos');
    console.log('8 - Remover um pedido');
    console.log('9 - Sair do sistema');

   
    escolha = Number(prompt('O que você deseja fazer? '));

    switch (escolha) {
        case 1:
            cadastrarCliente();
            break;
        case 2:
            console.log('Seus clientes são: ');
            console.log(verClientes());
            break;
        case 3:
            cadastrarProduto();
            break;
        case 4:
            console.log('Seus produtos são:');
            console.log(listarProduto());
            break;
        case 5:
            removerProduto();
            break;
        case 6:
            iniciarCriacaoPedido();
            break;
        case 7:
            gerenciarVerPedidos();      
           const pedidosAtuais = verPedidos();
    console.log('📋 Lista de Pedidos:', JSON.stringify(pedidosAtuais, null, 2));
    break;
        case 8: 
            removerPedido();
            break;
        case 9: 
            console.log("Você escolheu sair do sistema");
            break;
        default:
            console.log('Digite uma opção válida!');
    }
} while (escolha !== 9);