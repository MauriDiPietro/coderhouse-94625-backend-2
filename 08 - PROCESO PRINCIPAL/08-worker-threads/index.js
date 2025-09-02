import { Worker } from 'worker_threads';

console.log('iniciando tarea pesada....');

const worker = new Worker('./worker.js')

worker.on('message', (resultado)=>{
    console.log(`El resultado es ${resultado}`);
})

worker.on('error', (err)=>{
    console.error('Error en el worker', err);
})

worker.on('exit', (code)=>{
    console.error(`El worker se detuvo con el código ${code}`);
})

console.log('otra tarea...');
