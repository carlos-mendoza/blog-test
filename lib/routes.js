Router.configure({
	layoutTemplate: 'masterLayout',
	loadingTemplate: 'spinner',
	notFoundTemplate: 'pageNotFound',
	yieldTemplates: {
		nav: {to: 'nav'},
//        footer: {to: 'footer'},
	}
});

AccountsTemplates.configure({
    defaultLayout: 'formLayout',
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

Router.route('/', {
 	name: 'home',
 	controller: 'MainPageController'
});

Router.route('/new', {
	name: 'newPost',
	controller: 'NewPostController'
});

Router.route('/:_id', {
	name: 'singlePost',
	controller: 'SinglePostController'
});

Router.onBeforeAction(function() {
	if (!Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}, {only: 'newPost'});