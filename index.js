require('dotenv').config()
let express = require('express')
let app = express()
let morgan = require('morgan')
let ejs = require('ejs');
let port = process.env.port
let todoRoutes = require('./routes/todo')

app.use(morgan('tiny'))

app.use(express.static("static"));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('', todoRoutes)


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})