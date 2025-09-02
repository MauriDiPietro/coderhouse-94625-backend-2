export const calculo = () =>{
    let suma = 0;
    for (let i = 0; i < 1e10; i++) {
        suma += i;
    }
    return suma;
}

// console.log(calculo());

process.on('message', (msg)=>{
    if(msg === 'start'){
        const resultado = calculo();
        process.send(resultado);
    }
})