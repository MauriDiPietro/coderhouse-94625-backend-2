import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.all('/*', (req, res, next)=>{
    console.log(`[${new Date().toISOString()}] - ${req.method} to ${req.originalUrl}`);
    next()
})

app.use('/api', router);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto: ${PORT}`);
});