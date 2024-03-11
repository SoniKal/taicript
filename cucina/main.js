"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chef_1 = require("./chef");
var plato_1 = require("./plato");
var restaurante_1 = require("./restaurante");
var tipoPlato_1 = require("./tipoPlato");
var chef1 = new chef_1.Chef("Alan", new Date("1990-05-15"), new Map());
var chef2 = new chef_1.Chef("Tom", new Date("2008-10-20"), new Map()); // Chef under 18
var plato1 = new plato_1.Plato("Fideos", chef1, tipoPlato_1.tiposPlatos.PLATO_PRINCIPAL);
var plato2 = new plato_1.Plato("Mila&Fritas", chef2, tipoPlato_1.tiposPlatos.ENTRADA);
var resto = new restaurante_1.Restaurante("Pollos Hermanos", new Set([plato2]), new Set([chef1]));
var resto2 = new restaurante_1.Restaurante("Nuggets Kings", new Set([plato1]), new Set([chef1]));
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
