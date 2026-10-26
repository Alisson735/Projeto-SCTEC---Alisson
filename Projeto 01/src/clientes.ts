import type { cliente } from './types'

 export const clientes : cliente [] = [
    {nome:'Igor', email: 'Igor@gmail.com', id: 1

    },

   {nome:'Vitor', email: 'Vitor@gmail.com', id: 2

   },

   {nome:'Fernanda', email: 'Fernanda@gmail.com', id: 3
    
   },

   {nome:'Gabriela', email: 'Gabriela@gmail.com', id: 4
    
   },
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