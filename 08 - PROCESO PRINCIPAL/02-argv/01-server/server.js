import express from 'express';

// console.log(process.argv);

const app = express();

const PORT = process.argv[2] || 8080;
const mode = process.argv[3];

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}, mode ${mode}`));