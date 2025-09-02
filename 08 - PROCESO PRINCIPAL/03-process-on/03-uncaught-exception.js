process.on('uncaughtException', (error)=>{
    console.error('hubo un error no capturado: ', error);
    process.exit(1);
})

const test = () =>{
    console.log('ejecutando algo...');
    throw new Error('error de prueba');
}

test();