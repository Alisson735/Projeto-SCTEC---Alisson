"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaTexto = validaTexto;
function validaTexto(texto) {
    if (texto.trim() === '') {
        console.log('Não pode ser vazio');
        return false;
    }
    return true;
}
//# sourceMappingURL=relatorios.js.map