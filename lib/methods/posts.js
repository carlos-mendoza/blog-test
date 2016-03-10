Meteor.methods({
  'submitPost': function(post) {

    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first');

    var additionalParams = {
      createdAt: new Date(),
      userId: user._id
    }

    _.extend(post, additionalParams);
    post._id = Posts.insert(post);

    return post;
  },

  'postLike': function(post) {
    var user = Meteor.user();
    if (!user) {
      throw new Meteor.Error("logged-out", "The user must be logged in to like a post.");
    }

    if (_.contains(Posts.usersLike, Meteor.userId())) {
      console.log('you already liked this post');
    }

    Posts.update(post, {$addToSet: {usersLike: Meteor.userId()}, $inc: {likes: 1}});
    return true;
  },
});