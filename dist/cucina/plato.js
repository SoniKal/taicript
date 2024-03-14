"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
class Plato {
    constructor(nombre2, AC2, t2) {
        this.nombre = nombre2;
        this.chefACargo = AC2;
        this.tipo = t2;
    }
    getNombre() {
        return this.nombre;
    }
    getChefACargo() {
        return this.chefACargo;
    }
    getTipoDePlato() {
        return this.tipo;
    }
}
exports.Plato = Plato;
