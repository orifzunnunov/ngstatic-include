angular.module("staticTemplate").controller("Controller", ["$scope", "$http", function($scope, $http){
    $scope.text = "This is a test message";
    $scope.text2 = "This is a test message for in-main body";
    
    $scope.myList = [];
    
    $http.get("data.json").then(function(response){
       $scope.myList = response.data; 
    });
}]);