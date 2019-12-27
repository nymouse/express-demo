const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.set('view engine', 'pug')
// views trong file view
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var arr = [
   {name: "linh gia"},
   {name: "thong"},
   {name: "nhat linh"},
   {name: "ba lam"},
   {name: "thu ha"}
] 

app.get('/', (req, res)=>{
	res.render("index", {
		number: "300$"
	})
})
app.get('/user', (req, res)=>{
	res.render("user/index", {
		name:arr
	});
})
app.get('/user/seach', (req, res)=>{
  var q = req.query.q
  var show = arr.filter(function(username){
  	return username.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('user/index', {
  	name: show
  })
})
app.get('/user/create', function(req, res){
	res.render('user/create')
})
app.post('/user/create', function (req, res) {
  arr.push(req.body)
  res.redirect('/user')
})
app.listen(port);