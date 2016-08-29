'use strict'

  app.factory('Profile', function(FURL, $firebase, $q) {
    var ref = new Firebase(FURL);

    var Profile = {

      getPostsForUser: function(uid) {
  			var defer = $q.defer();

        $firebase(ref.child('user_posts').child(uid))
  				.$asArray()
  				.$loaded()
  				.then(function(posts) {
  					defer.resolve(posts);
  				}, function(err) {
  					defer.reject();
  				});

  			return defer.promise;
		  },

	};

	return Profile;

  });
