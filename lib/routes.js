Router.configure({
	layoutTemplate: 'masterLayout',
	loadingTemplate: 'spinner',
	notFoundTemplate: 'pageNotFound',
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

Router.route('/:_id', {
	name: 'singlePost',
	controller: 'SinglePostController'
});