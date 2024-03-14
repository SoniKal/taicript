import { Persona } from "./persona";
import { Restaurante } from "./restaurante";

export class Chef extends Persona{
    private experiencia: Map<Restaurante, number> = new Map<Restaurante, number>;

    public constructor(n2: string, d2: Date)
    {
        super(n2, d2);
        this.experiencia = new Map<Restaurante, number>() ;
    }
    
    public getExperiencia(): Map<Restaurante, number> 
    {
        return this.experiencia;
    }
}