import promptSync = require('prompt-sync');
import { cadastrarCliente, verClientes } from './clientes';
import { cadastrarProduto, listarProduto, removerProduto, buscarProdutoPeloNome, } from './produtos';
import  type { cliente } from './types';
import { criarPedido, } from './pedidos';

const prompt = promptSync({sigint: true});

let escolha: number = 0

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
            console.log('Seus produtos são');
            console.log(listarProduto());
            break;
        case 5:
            removerProduto();
            break;
        case 6:
            criarPedido
            break;
        case 7:
             buscarProdutoPeloNome
             console.log('Digite nome do produto!')
        case 9: 
            console.log("Você escolheu sair do sistema");
            break;
        default:
            console.log('Digite uma opção válida!')
    }
} while (escolha !== 9)

