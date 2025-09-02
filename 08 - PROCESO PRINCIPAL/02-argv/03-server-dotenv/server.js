import express from 'express';
import config from './config.js';

const app = express();

const PORT = config.PORT;

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}, mode ${config.ENV}`));