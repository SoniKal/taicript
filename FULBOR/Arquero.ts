import { Jugador } from "./Jugador";
import { posicion } from "./posicion";

export class Arquero extends Jugador{
    private porcentatajadas: number;
    private cantgolesrecibidos: number;
    private tirosrecibidos: number;

    public constructor(n1 : string, n2 : Date, p2 : string, n3 : number){
        super(n1,n2,posicion.ARQUERO,p2,n3);
        this.porcentatajadas = 100;
        this.cantgolesrecibidos = 0;
        this.tirosrecibidos = 1;
    }
    public getporcentatajadas(): number {
        return this.porcentatajadas;
    }

    public setporcentatajadas(porcentatajadas: number) {
        this.porcentatajadas = porcentatajadas;
    }

    public getcantgolesrecibidos(): number {
        return this.cantgolesrecibidos;
    }

    public setcantgolesrecibidos(cantgolesrecibidos: number) {
        this.cantgolesrecibidos = cantgolesrecibidos;
    }

    public gettirosrecibidos(): number {
        return this.tirosrecibidos;
    }

    public settirosrecibidos(tirosrecibidos: number) {
        this.tirosrecibidos = tirosrecibidos;
    }
}