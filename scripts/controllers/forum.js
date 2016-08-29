'use strict';

app.controller('ForumController', function($scope, $routeParams, toaster, Post, Auth, Comment) {

	$scope.searchPost = '';
	$scope.posts = Post.all;

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;

	$scope.listMode = true;

	if ($routeParams.postId) {
		var post = Post.getPost($routeParams.postId).$asObject();
		$scope.listMode = false;
		setSelectedPost(post);
	}

	function setSelectedPost(post) {
		$scope.selectedPost = post;

		// Check isPostCreator only if user is signedIn
		if($scope.signedIn()) {

			// Check if the current user is the creator of selected post
			$scope.isPostCreator = Post.isCreator;

			// Check if the selectedPost is open
			$scope.isOpen = Post.isOpen;

			// Check if the current user is on the team of the selected post
				$scope.isOnTeam = Post.isOnTeam;

		}

		// Get list of comments for the selected post
		$scope.comments = Comment.comments(post.$id);

	}

	// --------------- Post ---------------

	$scope.cancelPost = function(postId) {
		Post.cancelPost(postId).then(function() {
			toaster.pop('success', "Your post has been deleted.");
		});

	};

	// --------------- Comment ---------------

	$scope.addComment = function() {
		var comment = {
			content: $scope.content,
			name: $scope.user.profile.name,
			gravatar: $scope.user.profile.gravatar
		};

		Comment.addComment($scope.selectedPost.$id, comment).then(function() {
			$scope.content = '';
		});
	};

});
