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

StormTrack.controller("packageController", function($scope, $location) {


	if($location.search().email){
		alert("api call");
		}else{
		alert("fail and return");
		return
	}
});