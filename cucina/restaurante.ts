import { Chef } from "./chef";
import { Plato } from "./plato";

export class Restaurante {
    private nombre: string;
    private listadoPlatos: Set<Plato> = new Set<Plato>;
    private listadoChefs: Set<Chef> = new Set<Chef>;
    
    
    public constructor(nombre2: string, l2: Set<Plato>, c2: Set<Chef>) {
        this.nombre = nombre2;
        this.listadoPlatos = l2;
        this.listadoChefs = c2;
    }

    
    public getNombre(): string {
        return this.nombre;
    }

    public getListadoPlatos(): Set<Plato> {
        return this.listadoPlatos;
    }

    public getListadoChefs(): Set<Chef> {
        return this.listadoChefs;
    }

    public aniadirPlato(plato: Plato): void {
        if (!this.listadoChefs.has(plato.getChefACargo())) {
            throw new Error('El chef no es parte del restaurante');
        }
        if (this.listadoPlatos.has(plato)) {
            throw new Error('Plato ya registrado');
        }
        this.listadoPlatos.add(plato);
    }
    
    public aniadirChef(chef: Chef): void {
        const edadChef = new Date().getFullYear() - chef.nacimiento.getFullYear();
        if (edadChef < 18) {
            throw new Error('Chef menor de edad');
        }
        if (chef.getExperiencia().size === 0) {
            throw new Error('Chef sin experiencia');
        }
        this.listadoChefs.add(chef);
    }
    
}