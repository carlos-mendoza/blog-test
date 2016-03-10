Meteor.methods({
  'submitPost': function(post) {

    var additionalParams = {
      createdAt: new Date(),
    }

    _.extend(post, additionalParams);
    post._id = Posts.insert(post);

    return post;
  }

});