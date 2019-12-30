var db = require('../db')
const shortid = require('shortid');

module.exports.index = function(req, res){
	res.render("user/index", {
		name: db.get('user').value()
	});
};
module.exports.seach = function(req, res){
  var q = req.query.q
  var show = db.get('user').value().filter(function(username){
  	return username.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('user/index', {
  	name: show
  })
};
module.exports.create = function(req, res){
	res.render('user/create')
};
module.exports.getid = function(req, res){
	var userid = req.params.userid
	var user = db.get('user').find({userid: userid}).value();
	res.render('user/view', {
		user: user
	})
};
module.exports.postCreate = function (req, res) {
	req.body.userid = shortid.generate()
  db.get('user').push(req.body).write()
  res.redirect('/user')
};