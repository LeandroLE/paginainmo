// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
	cons = require('consolidate'),
	nunjucks = require('nunjucks');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'PaginaInmobiliaria',
	'brand': 'PaginaInmobiliaria',
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'html',
	'custom engine': cons.nunjucks,
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'N',
	'cookie secret': 'GTC_~W_v}L~>FtQHp53P6T;[aTNv.%#a7LGfWq3I2Ig0dh57Z$*16:BOc9"c0rSm'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

//keystone.set('mandrill api key', 'z4M1MuxPdFCLVA-bA3ngfw');

keystone.set('cloudinary config', 'cloudinary://374534765442513:xeIY26FXmq_55uj4xzwOabEVNsg@dq8bgsqwg');

// Load your project's Routes

keystone.set('routes', require('./routes'));


// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'galleries': 'galleries',
	'ns': 'ns'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();

console.log('Express en modo %s: ', keystone.get('env'));
