var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope, $http) {
  $http.get('employees.js').success(function(data) {
    console.log(data); 
    $scope.employees=data; 
  })
    var technologies = [
      { name: "Ruby", likes: 0, dislikes: 0 },
      { name: "Python", likes: 0, dislikes: 0 },
      { name: "PHP", likes: 0, dislikes: 0 },
      { name: "Javascript", likes: 0, dislikes: 0 },
      { name: "Java", likes: 0, dislikes: 0 }
    ]
    
    $scope.incrementLikes = function(tech) {
      tech.likes++;
    }
    
    $scope.incrementDisLikes = function(tech) {
      tech.dislikes++;
    }
    
    $scope.message = "Angular JS practice";
  //  $scope.employees = 
    $scope.technologies = technologies;
    $scope.sortBy = "firstName";
  });
