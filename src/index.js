const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static((path.join(__dirname, 'public'))))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req,res)=> res.render('home'))
app.get('/about', (req,res)=> res.send('<h1>Hello Im A FE Developer!</h1>'))
app.get('/address', (req,res)=> res.send('<h1>Hue - VietNam!</h1>'))
app.get('/address', (req,res)=> res.send('<h1>Gender: Male</h1>'))

app.listen(port, ()=> console.log(`Example app listening at port ${port}`))