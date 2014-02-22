var hackControllers = angular.module('hackControllers', ["resourceService","projectService"]);
 
hackControllers.controller('ResourceCtrl', function ($scope, $http, Resource) {
  $scope.resources = Resource.query();
  $scope.addResource = function () {
  	var newResource = new Resource({name: $scope.newresource.name, description: $scope.newresource.description, link: $scope.newresource.link })
  	newResource.$save();
  	$scope.resources.push(newResource)
  	
  };

  $scope.deleteResource = function (id, item) {
  	Resource.remove({_id: id});
  	$scope.resources.splice(item,1);
  };

});


hackControllers.controller('ProjectCtrl', function ($scope, $http, Project) {
  $scope.projects = Project.query();
  $scope.addproject = function () {
  	var newProject = new Project({name: $scope.newproject.name, description: $scope.newproject.description, github_url: $scope.newproject.github_url })
  	newProject.$save();
  	$scope.projects.push(newProject)
  	
  };

  $scope.deleteproject = function (id, item) {
  	Project.remove({_id: id});
  	$scope.projects.splice(item,1);
  };

});

function HeaderCtrl($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
        //return true;
    };
}