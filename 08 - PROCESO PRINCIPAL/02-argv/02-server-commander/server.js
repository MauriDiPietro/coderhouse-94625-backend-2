import express from 'express';
import { program } from 'commander';

// console.log(process.argv);

const app = express();

program
    .option('-p <port>', 'port server', 8080)
    .option('-m <mode>', 'mode server', 'DEV')

program.parse();

console.log(program.opts());

const PORT = program.opts().p
const mode = program.opts().m;

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}, mode ${mode}`));