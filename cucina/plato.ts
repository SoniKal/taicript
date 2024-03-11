import { Chef } from "./chef";
import { tiposPlatos } from "./tipoPlato";

export class Plato {
    private nombre: string;
    private chefACargo: Chef;
    private tipo: tiposPlatos;

    public constructor(nombre2: string, AC2: Chef, t2: tiposPlatos) {
        this.nombre = nombre2;
        this.chefACargo = AC2;
        this.tipo = t2;
    }
    
    public getNombre(): string {
        return this.nombre;
    }

    public getChefACargo(): Chef {
        return this.chefACargo;
    }

    public getTipoDePlato(): tiposPlatos {
        return this.tipo;
    }
}