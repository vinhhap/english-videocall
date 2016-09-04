FlowRouter.route('/', {
  name: "root",
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'partners'});
  }
});

FlowRouter.route('/new-profile', {
  name: "profileNew",
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'profileNew'});
  }
});

FlowRouter.route('/edit-profile/:profileId', {
  name: "profileEdit",
  action: function(params) {
    BlazeLayout.render('mainLayout', {main: 'profileEdit'});
  }
});

FlowRouter.route('/profile/:profileId', {
  name: "profileView",
  action: function(params) {
    BlazeLayout.render('mainLayout', {main: 'profileView'});
  }
});

FlowRouter.route('/call/:userId', {
  name: "call",
  action: function() {
    BlazeLayout.render('videoCall');
  }
})

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  layoutTemplate: 'accountLayout',
  layoutRegions: {
    nav: 'navigation',
    footer: 'footer'
  },
  contentRegion: 'main'
});
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/sign-up',
  layoutTemplate: 'accountLayout',
  layoutRegions: {
    nav: 'navigation',
    footer: 'footer'
  },
  contentRegion: 'main'
});
