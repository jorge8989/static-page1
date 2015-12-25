var myApp = angular.module("myModule", ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl:'employees.html'})
  });
myApp.controller("myController", function($scope, $http) {
   $http.get('employees.js').success(function(data) {
     $scope.employees=data;
   })
   $http.get('technologies.js').success(function(data) {
     $scope.technologies=data;  
   })
    
  $scope.incrementLikes = function(tech) {
    tech.likes++;
  }
    
  $scope.incrementDisLikes = function(tech) {
    tech.dislikes++;
  }
    
  $scope.message = "Angular JS practice";
  $scope.sortBy = "firstName";
  
  });
