process.on('beforeExit', (code)=>{
    console.log('el proceso terminó con el código: ', code);
})

console.log('ejecutando algo.....');


// process.exit()