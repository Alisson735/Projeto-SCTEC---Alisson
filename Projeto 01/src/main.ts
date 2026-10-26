import promptSync = require('prompt-sync');
import { cadastrarCliente, verClientes } from './clientes';
import  type { cliente } from './types';

const prompt = promptSync({sigint: true});

const nomeInput: string = prompt('Digite nome do cliente');
const emailInput: string = (prompt('Digite o email do cliente'));
const idInput: string = prompt('Digite o ID do cliente:');

const novoCliente: cliente = {
    nome: nomeInput,
    email: emailInput || '',
    id: idInput,
}

cadastrarCliente(novoCliente);
const listaClientes = verClientes();
console.log(verClientes());
