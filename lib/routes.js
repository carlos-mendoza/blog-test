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