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
    }
});