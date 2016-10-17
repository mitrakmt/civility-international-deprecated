'use strict';

app.factory('Post', function(FURL, $firebase, Auth) {
  var ref = new Firebase(FURL);
  var posts = $firebase(ref.child('posts')).$asArray();
	var user = Auth.user;

	var Post = {
		all: posts,

		getPost: function(postId) {
			return $firebase(ref.child('posts').child(postId));
		},

		createPost: function(post) {
			post.datetime = Firebase.ServerValue.TIMESTAMP;
      return posts.$add(post).then(function(newPost) {

      var obj = {
					postId: newPost.key(),
					title: post.title,
          description: post.description
				};

				return $firebase(ref.child('user_posts').child(post.poster)).$push(obj);
			});
		},

		editPost: function(post) {
			var t = this.getPost(post.$id);
			return t.$update({title: post.title, description: post.description});
		},

		cancelPost: function(postId) {
			var t = this.getPost(postId);
			return t.$remove();
		},

    replacePost: function(postId) {
			Post.getPost(postId)
				.$asObject()
				.$loaded()
				.then(function(post) {
  			    $firebase(ref.child('user_posts').child(post.poster)).$remove();
				});
		},

		isCreator: function(post) {
			return (user && user.provider && user.uid === post.poster);
		},

		isOpen: function(post) {
			return post.status === "open";
		},

    isOnTeam: function(post) {
			return (user && user.provider && user.uid === post.runner);
		},

    isFull: function(post) {
			return post.status === "full";
		}
	};

	return Post;

});
