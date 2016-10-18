'use strict'

app.controller('PostController', function ($scope, $location, toaster, Post, Auth) {

	// $scope.createPost = function () {
	// 	$scope.post.status = 'open'
	// 	$scope.post.gravatar = Auth.user.profile.gravatar
	// 	$scope.post.name = Auth.user.profile.name
	// 	$scope.post.poster = Auth.user.uid
	//
	// 	Post.createPost($scope.post).then(function (ref) {
	// 		toaster.pop('success', 'Post created successfully.')
	// 		$scope.post = {title: '', description: '', status: 'open', gravatar: '', name: '', poster: ''}
	// 		$location.path('/forum/' + ref.key())
	// 	})
	// }
	//
	// $scope.editPost = function (post) {
	// 	Post.editPost(post).then(function () {
	// 		toaster.pop('success', "Your post is updated.")
	// 	})
	// }

})
