var myApp = angular.module("myModule", ['ngRoute']);

//ROUTES
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl:'employees.html'})
    .when('/employee/:id', {templateUrl: 'employee.html', controller: 'viewController'})
    .when('/languages', {templateUrl: 'languages.html', controller: 'technologiesController'})
  });

//CONTROLLERS  
myApp.controller("employeesController", function($scope, $http) {
   $http.get('employees.js')
   .then(function(response) {
     $scope.employees=response.data;
   })
    
  $scope.message = "Angular JS practice";
  $scope.sortBy = "firstName";
  $scope.searchBy = "firstName";
  
  });
  
  myApp.controller("viewController", function($scope, $routeParams) {
    function find_by(attr, value) {
      for (var n = 0; n < $scope.employees.length; n++) {
        if ($scope.employees[n][attr] == value ) {
          return $scope.employees[n];
          break;
        }
      }
    }
    $scope.employee = find_by("id", $routeParams.id)
  });
  
  myApp.controller("technologiesController", function($scope, $http) {
    $http.get('technologies.js')
    .then(function(response) {
       $scope.technologies=response.data;  
    })
     
   $scope.incrementLikes = function(tech) {
     tech.likes++;
   }
     
   $scope.incrementDisLikes = function(tech) {
     tech.dislikes++;
   }
  });
