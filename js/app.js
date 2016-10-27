
var app = angular.module('myFirstApp', ['angular.filter']);

 app.controller('usersCtrl', function($scope, $http, $rootScope) {
 	$http({
 		method:"GET",
 		url:"json/users.json"
 	}) .then(function(response) {
 		$scope.users=response.data.records;

 		$rootScope.aUsers = []; //init
 		$scope.bUsers = [];
        
        //Generating array aUsers with structure [id => username]     
        
        for($user in $scope.users){

            // 
            $rootScope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;           
            
            $scope.bUsers[$scope.users[$user].Id] = $scope.users[$user].usercolor;	
        };        	
        
 	});
 });	

    
    function myFunction() {

        document.getElementsByTagName("h4").setAttribute("class", "colorclass"); 
        
    };




app.controller('depensesCtrl', function($scope, $http, $rootScope) {
 	$http({
 		method:"GET",
 		url:"json/depenses.json"
 	}) .then(function(response){
 		$scope.depenses=response.data.records;

 	    //Variable qui permet de créer le premier tableau à explorer.
        $scope.aConcernes = [];
        
        //Tableau qui stocke les noms un par un et qui est ensuite join
        $scope.aConcernesElement = [];
        
        //Tableau avec la liste des noms mais le mauvais index
        $scope.aConcernesTrue = [];
        
        //Le bon tableau à utiliser
        $scope.aConcernesFinal = [];        
            
            for($depense in $scope.depenses) {
            //On crée le tableau à explorer (le split est important car il permet de rendre ce tableau exploitable pour la boucle suivante)
            $scope.aConcernes[$depense] = $scope.depenses[$depense].Concernes.split(',');
        }
        
        //le $scope.aConcernes est un tableau qui contient des tableaux (2 niveaux, donc 2 boucles for)
        for ($i=0; $i < $scope.aConcernes.length; $i++) {
            for ($x=0; $x < $scope.aConcernes[$i].length; $x++) {
                //On transforme les ID en nom.
                $scope.aConcernesElement.push($rootScope.aUsers[$scope.aConcernes[$i][$x]]);
            }
            //On join les nom pour obtenir une ligne qu'on assigne dans un tableau unique
            $scope.aConcernesElement = $scope.aConcernesElement.join(", ");
            $scope.aConcernesTrue.push($scope.aConcernesElement);
            //On réinitialise la ligne pour faire une nouvelle
            $scope.aConcernesElement = [];
        }
        
        //Cette boucle est pour créer un tableau qui a pour clés les ID des dépenses et pour valeur les lignes créer plus tôt.
        for($depense in $scope.depenses) {
            $scope.aConcernesFinal[$scope.depenses[$depense].Id] = $scope.aConcernesTrue[$depense];
        }

    });
 });
 
