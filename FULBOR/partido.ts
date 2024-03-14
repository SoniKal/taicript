import { Arquero } from "./Arquero";
import { Equipo } from "./Equipo";
import { Jugador } from "./Jugador";
import { jugadorcancha } from "./jugadorcancha";

export class partido {
    private equipo_1: Equipo;
    private equipo_2: Equipo;
    private goles: Map<jugadorcancha, number>;
    private Tiros: Map<jugadorcancha, number>;
    private atajadas: Map<Arquero, number>;
    private golescontra: Map<Jugador, number>;
    private asistencias: Map<jugadorcancha, number>;

    public constructor(e1: Equipo, e2: Equipo) {
        this.equipo_1 = e1;
        this.equipo_2 = e2;
        this.goles = new Map<jugadorcancha, number>();
        this.Tiros = new Map<jugadorcancha, number>();
        this.atajadas = new Map<Arquero, number>();
        this.golescontra = new Map<Jugador, number>();
        this.asistencias = new Map<jugadorcancha, number>();
    }

    public getEquipo_1(): Equipo {
        return this.equipo_1;
    }

    public setEquipo_1(equipo_1: Equipo): void {
        this.equipo_1 = equipo_1;
    }

    public getEquipo_2(): Equipo {
        return this.equipo_2;
    }

    public setEquipo_2(equipo_2: Equipo): void {
        this.equipo_2 = equipo_2;
    }

    public getGoles(): Map<jugadorcancha, number> {
        return this.goles;
    }

    public setGoles(m1 : Map<jugadorcancha, number>){
        this.goles = m1;
    }

    public gettiros(): Map<jugadorcancha, number> {
        return this.Tiros;
    }

    public settiros(m1 : Map<jugadorcancha, number>){
        this.goles = m1;
    }
    
}