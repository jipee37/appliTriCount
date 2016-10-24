
var app = angular.module('myFirstApp', ['angular.filter']);

 app.controller('usersCtrl', function($scope, $http) {
 	$http({
 		method:"GET",
 		url:"json/users.json"
 	}) .then(function(response){
 		$scope.users=response.data.records;

 		$scope.aUsers = []; //init
        
        //Generating array aUsers with structure [id => username]
        
        for($user in $scope.users){

            $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        	
        };



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
 
