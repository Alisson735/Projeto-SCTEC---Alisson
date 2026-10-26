import type { cliente } from './types'

const clientes : cliente [] = [
    {nome:'Igor', idade: 34}
];

function cadastrarCliente (cliente:cliente) : void{
clientes.push(cliente)
}

function verClientes(): cliente[] {
    return clientes;
}

export {
    cadastrarCliente,
    verClientes
}