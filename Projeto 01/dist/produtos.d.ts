import type { produto } from "./types";
declare function cadastrarProduto(): void;
declare function buscarProdutoPeloNome(nome: string): produto[];
declare function removerProduto(): void;
declare function buscarProdutoPeloPreco(preco: number): produto[];
declare function listarProduto(): produto[];
export { cadastrarProduto, listarProduto, buscarProdutoPeloNome, buscarProdutoPeloPreco, removerProduto };
//# sourceMappingURL=produtos.d.ts.map