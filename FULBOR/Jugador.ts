import { Persona } from "../cucina/persona";
import { posicion } from "./posicion";
import { Equipo } from "./Equipo";

export abstract class Jugador extends Persona {
    private pos : posicion;
    private provincia : string;
    private historial : Array<Equipo>;
    private numero : number;
    private suspendido : boolean;
    private goles_en_contra : number;

    public constructor(n1 : string, n2 : Date, p1 : posicion, p2 : string, n3 : number){
        super(n1,n2);
        this.pos = p1;
        this.provincia = p2;
        this.historial = new Array<Equipo>();
        this.numero = n3;
        this.suspendido = false;
        this.goles_en_contra = 0;
    }

    public getPos() : posicion{
        return this.pos
    }

    public setPos(p1 : posicion){
        this.pos = p1;
    }

    public getprovincia() : string{
        return this.provincia;
    }

    public setprovincia(n1 : string){
        this.provincia = n1;
    }

    public gethistorial() : Array<Equipo>{
        return this.historial;
    }

    public sethistorial(n1 : Array<Equipo>){
        this.historial = n1;
    }

    public getnumero() : number{
        return this.numero;
    }

    public setnumero(n1 : number){
        this.numero = n1;
    }

    public getsuspendido() : boolean{
        return this.suspendido;
    }

    public setsuspendido(n1 : boolean){
        this.suspendido = n1;
    }

    public getGoles_en_contra(): number {
        return this.goles_en_contra;
    }

    public setGoles_en_contra(goles_en_contra: number): void {
        this.goles_en_contra = goles_en_contra;
    }
}