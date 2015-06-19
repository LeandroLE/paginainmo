var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.section = 'gallery';
	

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('name'));
	view.query('galleries1', keystone.list('Gallery').model.find().sort('publishedDate'));
	view.query('galleries2', keystone.list('Gallery').model.find().sort('precio'));
	
	// Render the view
	view.render('index');
	
};
