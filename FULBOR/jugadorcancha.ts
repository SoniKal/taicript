import { Jugador } from "./Jugador";
import { posicion } from "./posicion";

export class jugadorcancha extends Jugador{
    private porcentgoles: number;
    private cantasistencias: number;
    private cantiros: number

    public constructor(n1 : string,p1 : posicion, n2 : Date, p2 : string, n3 : number){
        if(p1 == posicion.ARQUERO){
            throw new Error("jugador cancha no puede ser arquero");
        } else{
            super(n1,n2,p1,p2,n3);
            this.porcentgoles = 100;
            this.cantasistencias = 11;
            this.cantiros = 1;
        }
    }

    public getcantasistencias(): number {
        return this.cantasistencias;
    }

    public setcantasistencias(cantasistencias: number) {
        this.cantasistencias = cantasistencias;
    }

    public getporcentgoles(): number {
        return this.porcentgoles;
    }

    public setporcentgoles(porcentgoles: number) {
        this.porcentgoles = porcentgoles;
    }

    public getcantiros(): number {
        return this.cantiros;
    }

    public setcantiros(cantiros: number) {
        this.cantiros = cantiros;
    }

}
