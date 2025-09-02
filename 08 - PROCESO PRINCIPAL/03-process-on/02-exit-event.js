process.on('exit', (code)=>{
    console.log('el proceso terminó con el código: ', code);
})

console.log('ejecutando algo.....');

process.exit(5)
