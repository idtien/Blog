const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=> res.send('<h1>Hello World!</h1>'))
app.get('/about', (req,res)=> res.send('<h1>Hello Im A FE Developer!</h1>'))
app.get('/address', (req,res)=> res.send('<h1>Hue - VietNam!</h1>'))
app.listen(port, ()=> console.log(`Example app listening at port ${port}`))