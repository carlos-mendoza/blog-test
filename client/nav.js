Template.nav.events({
	"click .js-new-post": function (event) {
		if (!Meteor.user()) {
			event.preventDefault();
			MaterializeModal.message({
				title: "Please login!",
				message: "Please login or register to create a new post!"
			});
		}
	}
});