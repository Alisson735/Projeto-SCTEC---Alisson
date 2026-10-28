import type { cliente } from './types';
import { ItemCarrinho } from './carrinho';
export interface Pedido {
    id: number;
    cliente: cliente;
    itens: ItemCarrinho[];
    total: number;
}
export declare const pedidos: Pedido[];
export declare function criarPedido(cliente: cliente): Pedido;
export declare function verPedidos(): Pedido[];
export declare function gerenciarVerPedidos(): void;
export declare function iniciarCriacaoPedido(): void;
export declare function removerPedido(): void;
//# sourceMappingURL=pedidos.d.ts.map