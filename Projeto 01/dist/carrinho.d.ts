import type { produto } from './types';
export interface ItemCarrinho {
    produto: produto;
    quantidade: number;
}
export declare let carrinho: ItemCarrinho[];
export declare function adicionarAoCarrinho(produto: produto, quantidade: number): void;
export declare function verCarrinho(): ItemCarrinho[];
export declare function limparCarrinho(): void;
//# sourceMappingURL=carrinho.d.ts.map