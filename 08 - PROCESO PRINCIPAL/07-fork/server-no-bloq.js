import express from 'express';
import { fork } from 'child_process';

const scriptPath = `${process.cwd()}/calculo.js`;

// console.log(scriptPath)

const app = express();

let visitas = 0;

app.get('/', (req, res)=>{
    visitas++;
    res.send(`Cantidad de visitas: ${visitas}`);
})

app.get('/calculo', (req, res)=>{
    const child = fork(scriptPath);
    child.send('start');
    child.on('message', (resultado)=>{
        res.send(`Resultado del cálculo: ${resultado}`)
    })
})

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});