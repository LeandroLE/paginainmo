/**
 * Created by leandrole on 18/06/15.
 */

angular.module('FrontendModule', ['ngRoute'])

	.controller('mainController', function($scope) {
		$scope.formData = {};
		
		// use the service to get a ordered images list
		$scope.getSortList = function () {
			
			console.log("hola");
			switch ($scope.formData.optionselected) {
				case 'precio':
					imgapi.getSortListPrecio($scope.formData.optionselected)
						.success(function(data){
							$scope.orderedlist = data;
						});
					break;
				case 'publishedDate':
					imgapi.getSortListDate($scope.formData.optionselected)
						.success(function(data){
							$scope.orderedlist = data;
						});
					break;
				default:
					imgapi.getSortListName($scope.formData.optionselected)
						.success(function(data){
							$scope.orderedlist = data;
						});
					break;
			}
			$scope.formData={};
			
			imgapi.getSortListprecio()
				.success(function (data) {
					$scope.s = data;
				})
		};

	});
