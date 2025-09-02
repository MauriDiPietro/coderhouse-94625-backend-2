import { execFile } from 'child_process';

const scriptPath = `${process.cwd()}/comandos.txt`

console.log(scriptPath);


execFile(scriptPath, (error, stdout, stderr)=>{
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