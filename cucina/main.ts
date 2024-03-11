import { Chef } from "./chef";
import { Plato } from "./plato";
import { Restaurante } from "./restaurante";
import { tiposPlatos } from "./tipoPlato";

const chef1 = new Chef("Alan", new Date("1990-05-15"), new Map());
const chef2 = new Chef("Tom", new Date("2008-10-20"), new Map());
const plato1 = new Plato("Fideos", chef1, tiposPlatos.PLATO_PRINCIPAL);
const plato2 = new Plato("Mila&Fritas", chef2, tiposPlatos.ENTRADA);
const resto = new Restaurante("Pollos Hermanos", new Set([plato2]), new Set([chef1]));
const resto2 = new Restaurante("Nuggets Kings", new Set([plato1]), new Set([chef1]));
chef1.getExperiencia().set(resto2, 3);

try {
    resto.aniadirChef(chef1);
    console.log("Chef añadido: ", resto.getListadoChefs());
    resto.aniadirPlato(plato1);
    console.log("Plato añadido: ", resto.getListadoPlatos());
    resto.aniadirChef(chef2);
    resto.aniadirPlato(plato2);
} catch (error) {
    console.log("Error:", (error as Error).message);
}