import { Arquero } from "./Arquero";
import { Jugador } from "./Jugador";
import { jugadorcancha } from "./jugadorcancha";
import { posicion } from "./posicion";

export class Equipo {
    private nombre_equipo: string;

    private jugadores: Array<Jugador>;

    public constructor(n1: string) {
        this.jugadores = new Array<Jugador>;
        this.nombre_equipo = n1;
    }

    public getjugadores(): Array<Jugador> {
        return this.jugadores;
    }

    public setjugadores(jugadores: Array<Jugador>) {
        this.jugadores = jugadores;
    }

    public getnombreequipo(): string {
        return this.nombre_equipo;
    }

    public setnombreequipo(nombreequipo: string) {
        this.nombre_equipo = nombreequipo;
    }

    public contratar(j1: Jugador) {
        if (j1.getPos() == posicion.ARQUERO) {
            let temp: Arquero = <Arquero>j1;
            if (temp.gethistorial().includes(this)) {
                throw new Error("este jugador ya jugo en este equipo");
            } else {
                if (temp.getporcentatajadas() < 60) {
                    throw new Error("este arquero es un autista");
                } else {
                    if (temp.getcantgolesrecibidos() > 10) {
                        throw new Error("este arquero tiene down");
                    } else {
                        this.jugadores.push(temp);
                        let temp2: Array<Equipo>;
                        temp2 = temp.gethistorial()
                        temp2.push(this)
                        j1.sethistorial(temp2);
                    }
                }
            }
        } else {
            let temp: jugadorcancha = <jugadorcancha>j1;
            if (temp.gethistorial().includes(this)) {
                throw new Error("este jugador ya jugo en este equipo");
            } else {
                if (temp.getporcentgoles() < 30) {
                    throw new Error("este jugador es un bobo");
                } else {
                    if (temp.getcantasistencias() < 10) {
                        throw new Error("este jugador es inutil")
                    } else {
                        this.jugadores.push(temp);
                        let temp2: Array<Equipo>;
                        temp2 = temp.gethistorial()
                        temp2.push(this)
                        j1.sethistorial(temp2);
                    }
                }
            }
        }
    }

    public renovar(j1: Jugador) {
        if (this.jugadores.includes(j1)) {
            if (2024 - <number>j1.getnacimiento().getFullYear() > 35) {
                this.jugadores = this.jugadores.filter(item => item !== j1);
                throw new Error("este jugador ta viejo, se va del clu");
            } else {
                console.log("el jugador " + j1.getnombre() + "renovo en el club " + this.nombre_equipo)
            }
        }
    }
}