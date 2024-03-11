"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
var Plato = /** @class */ (function () {
    function Plato(nombre2, AC2, t2) {
        this.nombre = nombre2;
        this.chefACargo = AC2;
        this.tipo = t2;
    }
    Plato.prototype.getNombre = function () {
        return this.nombre;
    };
    Plato.prototype.getChefACargo = function () {
        return this.chefACargo;
    };
    Plato.prototype.getTipoDePlato = function () {
        return this.tipo;
    };
    return Plato;
}());
exports.Plato = Plato;
