var StormTrack = angular.module("StormTracker", ['ngRoute']);

StormTrack.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'app/pages/package.html',
		controller: 'packageController'
	})
}]);

StormTrack.controller("homeController", function($scope) {
	$scope.hello = "Hello world";
});

StormTrack.controller("packageController", function($scope) {
	$scope.solo = function() {
		alert("SOLO");
	};

	$scope.starter = function() {
		alert("STARTER");
	};

	$scope.business = function() {
		alert("BUSINESS");
	};
});