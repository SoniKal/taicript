"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurante = void 0;
var Restaurante = /** @class */ (function () {
    function Restaurante(nombre2, l2, c2) {
        this.listadoPlatos = new Set;
        this.listadoChefs = new Set;
        this.nombre = nombre2;
        this.listadoPlatos = l2;
        this.listadoChefs = c2;
    }
    Restaurante.prototype.getNombre = function () {
        return this.nombre;
    };
    Restaurante.prototype.getListadoPlatos = function () {
        return this.listadoPlatos;
    };
    Restaurante.prototype.getListadoChefs = function () {
        return this.listadoChefs;
    };
    Restaurante.prototype.aniadirPlato = function (plato) {
        if (!this.listadoChefs.has(plato.getChefACargo())) {
            throw new Error('El chef no es parte del restaurante');
        }
        if (this.listadoPlatos.has(plato)) {
            throw new Error('Plato ya registrado');
        }
        this.listadoPlatos.add(plato);
    };
    Restaurante.prototype.aniadirChef = function (chef) {
        var edadChef = new Date().getFullYear() - chef.nacimiento.getFullYear();
        if (edadChef < 18) {
            throw new Error('Chef menor de edad');
        }
        if (chef.getExperiencia().size === 0) {
            throw new Error('Chef sin experiencia');
        }
        this.listadoChefs.add(chef);
    };
    return Restaurante;
}());
exports.Restaurante = Restaurante;
