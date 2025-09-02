import express from 'express';
import { calculo } from './calculo.js';

const app = express();

let visitas = 0;

app.get('/', (req, res)=>{
    visitas++;
    res.send(`Cantidad de visitas: ${visitas}`);
})

app.get('/calculo', (req, res)=>{
    const resultado = calculo();
    res.send(`Resultado del cálculo: ${resultado}`);
})

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});