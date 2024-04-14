const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')

app.use(express.static((path.join(__dirname, 'public'))))

//Sử dụng express để tạo ra middleware để xử lý data từ formData lên server
// Lý do vì sao params không cần middleware mà vẫn có được dữ liệu khi gửi từ client lên
// đó là vì trong req.params người ta đã có sẵn middleware để xử lý dữ liệu, còn req.body thì chưa có nên cần phải xử lý
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))


route(app)



app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))