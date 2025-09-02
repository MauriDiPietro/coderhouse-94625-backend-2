import { exec } from 'child_process';

const comando1 = 'ls -lh'
const comando2 = 'find /'

exec(comando2, (error, stdout, stderr)=>{
    if(error){
        console.log('error: ', error);
        return
    }

    if(stderr){
        console.log('stderr: ', stderr);
        return
    }

    console.log('stdout: ', stdout);
    
})