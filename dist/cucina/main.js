"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chef_1 = require("./chef");
const plato_1 = require("./plato");
const restaurante_1 = require("./restaurante");
const tipoPlato_1 = require("./tipoPlato");
const chef1 = new chef_1.Chef("Alan", new Date("1990-05-15"), new Map());
const chef2 = new chef_1.Chef("Tom", new Date("2008-10-20"), new Map());
const plato1 = new plato_1.Plato("Fideos", chef1, tipoPlato_1.tiposPlatos.PLATO_PRINCIPAL);
const plato2 = new plato_1.Plato("Mila&Fritas", chef2, tipoPlato_1.tiposPlatos.ENTRADA);
const resto = new restaurante_1.Restaurante("Pollos Hermanos", new Set([plato2]), new Set([chef1]));
const resto2 = new restaurante_1.Restaurante("Nuggets Kings", new Set([plato1]), new Set([chef1]));
chef1.getExperiencia().set(resto2, 3);
try {
    resto.aniadirChef(chef1);
    console.log("Chef añadido: ", resto.getListadoChefs());
    resto.aniadirPlato(plato1);
    console.log("Plato añadido: ", resto.getListadoPlatos());
    resto.aniadirChef(chef2);
    resto.aniadirPlato(plato2);
}
catch (error) {
    console.log("Error:", error.message);
}
