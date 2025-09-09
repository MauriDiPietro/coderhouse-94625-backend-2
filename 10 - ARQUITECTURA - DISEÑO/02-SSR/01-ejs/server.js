import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res)=>{
    const user = {
        name: 'Juan'
    }
    res.render('index', { user })
})


app.listen(8080, ()=>console.log('server ok'))