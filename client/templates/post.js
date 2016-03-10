Template.postPage.helpers({
    canDelete: function () {
        if (Meteor.user()) {
            if (Meteor.user()._id == this.userId) {
                return true;
            }
        }
    }
});

Template.postPage.events({
    "click .js-like-post": function (event) {
        event.preventDefault();
        if (_.contains(this.usersLike, Meteor.userId())) {
            MaterializeModal.message({
                title: "You already liked this post!",
                message: "You can't like a post more than once."
            });
        } else {
            if (!Meteor.user()) {
                MaterializeModal.message({
                    title: "Please login!",
                    message: "Please login or register to like this post!"
                });
            } else {
                Meteor.call('postLike', this._id, function(err,res) {
                    if (err && err.error === "logged-out") {
                        MaterializeModal.message({
                            title: "Please login!",
                            message: "Please login or register to like this post!"
                        });
                    }
                });
            }
        }
    },
    "click .js-delete-post": function (event) {
        var postId = this._id;
        MaterializeModal.confirm({
          title: "Do you want to delete this post?",
          label: "Delete?",
          message: "",
          callback: function(error, response) {
            if (response.submit) {
                Meteor.call("deletePost", postId);
                    Router.go('/');
                    Materialize.toast("Post deleted!", 5000, "green");
            }
          }
        });
    }
});