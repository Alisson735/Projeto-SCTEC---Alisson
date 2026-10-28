import type { produto } from "./types";
export declare const produtos: produto[];
declare function cadastrarProduto(): void;
declare function buscarProdutoPeloNome(nome: string): produto[];
declare function iniciarBuscaProduto(): void;
declare function removerProduto(): void;
declare function buscarProdutoPeloPreco(preco: number): produto[];
declare function listarProduto(): produto[];
export { cadastrarProduto, listarProduto, buscarProdutoPeloNome, buscarProdutoPeloPreco, removerProduto, iniciarBuscaProduto };
//# sourceMappingURL=produtos.d.ts.map