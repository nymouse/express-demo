const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser')
app.set('view engine', 'pug')
var db = require('./db')


const shortid = require('shortid');

var userRoute = require('./router/routeruser.js')
// static file
app.use(express.static('public'))
 
// views trong file view
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)=>{
	res.render("index", {
		number: "300$"
	})
})

app.listen(port);
app.use('/user', userRoute)