import type { cliente } from './types'
import promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true });

const clientes: cliente[] = [];


function cadastrarCliente(): void {
const nomeInput = prompt('Digite nome do cliente');
const emailInput = prompt('Digite o email do cliente');
const idInput = Number(prompt('Digite o ID do cliente:'));

const novoCliente: cliente = {
    nome: nomeInput,
    email: emailInput || '',
    id: idInput,
    }

 adicionarALista(novoCliente);
}

function adicionarALista(cliente: cliente) {
    if (cliente.nome === '') {
        console.log('O nome do cliente deve ser preenchido!');
        return false;
    }
 clientes.push(cliente);
    console.log('Cliente cadastrado com sucesso');
    return true;
}

function verClientes(): cliente[] {
    return clientes;
}

function procurarClienteId(id: number): cliente | undefined {
    return clientes.find(cliente => cliente.id === id)
}

export {
    cadastrarCliente,
    verClientes,
    procurarClienteId
}

