'use strict';

app.controller('ProfileController', function($scope, Profile, Auth) {

	$scope.postRunner = [];
	$scope.postPoster = [];

	var uid = Auth.user.uid;

	Profile.getPostsForUser(uid).then(function(posts) {

		for(var i = 0; i < posts.length; i++) {
			posts[i].type? $scope.postPoster.push(posts[i]) : $scope.postRunner.push(posts[i])
		}

		$scope.numPoster = $scope.postPoster.length;
		$scope.numRunner = $scope.postRunner.length;

	})

});
