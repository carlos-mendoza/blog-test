Router.configure({
	layoutTemplate: 'masterLayout',
	yieldTemplates: {
		nav: {to: 'nav'},
//        footer: {to: 'footer'},
	}
});

Router.route('/', {
 	name: 'home',
 	controller: 'MainPageController'
});

Router.route('/new', {
	name: 'newPost',
	controller: 'NewPostController'
});
