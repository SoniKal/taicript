import { Persona } from "./persona";
import { Restaurante } from "./restaurante";

export class Chef extends Persona{
    private experiencia: Map<Restaurante, number> = new Map<Restaurante, number>;

    public constructor(n2: string, d2: Date, mapa: Map<Restaurante, number>)
    {
        super(n2, d2);
        this.experiencia = mapa;
    }
    
    public getExperiencia(): Map<Restaurante, number> 
    {
        return this.experiencia;
    }
}