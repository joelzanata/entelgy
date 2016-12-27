angular
	.module('appSnack')

	.factory('snacksService', function ($http) {
	  return{
	  	getSnacks: function() {
       return $http({
         url: 'https://private-anon-de702e2203-lucenelanchesfrontend.apiary-mock.com/lanches',
         method: 'GET'
       }).then(function(response) {
       	return response.data;
       })
     	},
     	getIngredientes: function() {
       return $http({
         url: 'https://private-anon-de702e2203-lucenelanchesfrontend.apiary-mock.com/ingredientes',
         method: 'GET'
       }).then(function(response) {
       	return response.data;
       })
     	}
 		};   
	});