var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	precio: { type: Types.Number}, 
	descripcion: {	type: Types.Textarea },
	caracteristicas: { type: Types.Textarea },
	localizacion: { type: Types.Location, defaults: { country: 'España' }}
	
});

Gallery.register();
