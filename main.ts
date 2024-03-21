import express, {Express,Request,Response} from 'express';
const app:Express = express();

app.get("/", (req:Request, res:Response) => {
    res.send("Hola tiago, DESPERTATE");
})


app.listen(3000,()=>{
    console.log("Estoy esperando a que te duermas tiago")
})