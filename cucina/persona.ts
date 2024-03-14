export  abstract class Persona {
    private nombre: string;
    private nacimiento: Date;

    public constructor(n2: string, d2: Date){
        this.nombre = n2;
        this.nacimiento = d2;
    }

    public getnombre() : string{
        return this.nombre;
    }

    public setnombre(n1 : string){
        this.nombre = n1;
    }

    public getnacimiento() : Date{
        return this.nacimiento;
    }

    public setnacimiento(n1 : Date){
        this.nacimiento = n1;
    }
}