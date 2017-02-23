var myApp = angular.module('myApp' , ['ui.router']);
myApp.config(function($stateProvider){
	$stateProvider
	.state('workshop',{
		url: "/workshop",
		templateUrl: "workshop.html" ,
		controller: "workshopController"
	})
	.state('blog',{
		url:"/blog" ,
		templateUrl : "blog.html",
		controller : "blogController"
	})
});
myApp.controller("workshopController",["$scope",function($scope){
	$scope.name="kc";
}]);

myApp.controller("blogController",["$scope",function($scope){
	$scope.name="kc";
}]);

