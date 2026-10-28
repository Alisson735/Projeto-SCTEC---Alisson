import type { produto } from "./types";
import promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true });


export const produtos : produto[] = [
    {
        nome: 'Mouse Gamer blueDragon',
        quantidade: 22,
        idProduto: 1,
        preco: 65.00,
    },

    { 
        nome: 'Teclado Gamer BlueDragon',
        quantidade: 15,
        idProduto: 2,
        preco: 350.00
     },

     { 
        nome: 'Monitor Gamer BlueDragon',
        quantidade: 35,
        idProduto: 3,
        preco: 750.00
     },

     { 
        nome: 'Cadeira Gamer BlueDragon',
        quantidade: 10,
        idProduto: 4,
        preco: 500.00
     },

     { 
        nome: 'Redset Gamer BlueDragon',
        quantidade: 25,
        idProduto: 5,
        preco: 175.00
     },

     { 
        nome: 'Gabinete Gamer BlueDragon',
        quantidade: 40,
        idProduto: 6,
        preco: 125.00
     },
];

function cadastrarProduto() {
    const nomeDoProdutoInput: string = String(prompt('Digite o nome do produto '));
    const idDoProdutoInput: number = Number(prompt('Digite o id do produto '));
    const quantidadeDoProdutoInput:number = Number(prompt('Digite a quantidade do produto '));
    const precoDoProdutoInput: number = Number(prompt('Digite o preco do produto '));

    if (produtos.find((produto: produto) => {
        return produto.idProduto === idDoProdutoInput
    })) {
        console.log('Já existe produto com esse ID')
        return;
    }

    const novoProduto: produto = {
        nome: nomeDoProdutoInput,
        idProduto: idDoProdutoInput,
        quantidade: quantidadeDoProdutoInput,
       preco: precoDoProdutoInput,  
       
    }


adicionarProduto(novoProduto);
}

function buscarProdutoPeloNome(nome: string): produto[] {
    return produtos.filter((p: produto) => {
        return p.nome.toLowerCase().includes(nome.toLowerCase());
    });
}


    function iniciarBuscaProduto(): void {
    const nomeBusca = prompt('Digite o nome do produto: ');
    const resultados = buscarProdutoPeloNome(nomeBusca); // Chama a função de cima

    if (resultados.length === 0) {
        console.log('❌ Nenhum produto encontrado com esse nome.');
    } else {
        console.log('📦 Produtos encontrados:', resultados);
    }
}


  


function adicionarProduto(produto: produto): boolean {
    
  

    produtos.push(produto);
    console.log('Produto cadastrado com sucesso');
    return true;
     
    
}


function removerProduto(): void {
    const idInput: number = Number(prompt('Digite o id do qual você deseja excluir'));
    const produtoIndex = produtos.findIndex((produto: produto) => produto.idProduto === idInput);
    produtos.splice(produtoIndex);
    console.log('Produto removido com sucesso');
}

function buscarProdutoPeloPreco(preco: number): produto[] {
    return produtos.filter((produto: produto) => {
        return produto.preco <= preco
    })
}

function listarProduto(): produto[] {
    return produtos
}

export {
    cadastrarProduto,
    listarProduto,
    buscarProdutoPeloNome,
    buscarProdutoPeloPreco,
    removerProduto,
    iniciarBuscaProduto
}
