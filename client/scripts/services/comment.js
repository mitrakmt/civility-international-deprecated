'use strict';

app.factory('Comment', function(FURL, $firebase) {

	var ref = new Firebase(FURL);

	var Comment = {
		comments: function(postId) {
			return $firebase(ref.child('comments').child(postId)).$asArray();
		},

		addComment: function(postId, comment) {
			var post_comments = this.comments(postId);
			comment.datetime = Firebase.ServerValue.TIMESTAMP;

			if(post_comments) {
				return post_comments.$add(comment);
			}
		}
	};

	return Comment;
});
