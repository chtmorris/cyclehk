Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('routes', {
    path: '/routes'
  });

  this.route('info', {
    path: '/info'
  });

  this.route('resources', {
    path: '/resources'
  });

});