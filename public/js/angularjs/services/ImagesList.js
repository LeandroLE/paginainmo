/**
 * Created by leandrole on 18/06/15.
 */


angular.module('imgListService', [])


	.factory('imgapi', function() {
		return {
			getSortListPrecio : function(precio) {
				
				console.log( (keystone.list('Gallery').model.find().sort('precio')));
			},
			getSortListDate : function(publishedDate) {

				return (keystone.list('Gallery').model.find().sort('publishedDate'));
			},
			getSortListName : function(name) {

				return (keystone.list('Gallery').model.find().sort('name'));
			}

		}
	});
