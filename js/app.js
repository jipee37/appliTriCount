var app = angular.module('myFirstApp', []);

 app.controller('usersCtrl', function($scope, $http) {
 	$http({
 		method:"GET",
 		url:"json/users.json"
 	}) .then(function(response){
 		$scope.users=response.data.records
 	});
 });	

app.controller('depensesCtrl', function($scope, $http) {
 	$http({
 		method:"GET",
 		url:"json/depenses.json"
 	}) .then(function(response){
 		$scope.depenses=response.data.records
 	});
 });	






 app.controller('testsCtrl', function($scope) {
 	$scope.name1 = 'titi';
 });
