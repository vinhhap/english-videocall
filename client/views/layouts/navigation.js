Template.navigation.events({
  "click .logout-btn": function(event) {
    event.preventDefault();
    peer.destroy();
    AccountsTemplates.logout();
  }
});

Template.navigation.helpers({
  userEmail: function() {
    return Meteor.user().emails[0].address;
  },
  haveProfile: function() {
    var profile = Profiles.findOne({userId: Meteor.userId()});
    if(profile) {
      return profile._id
    } else {
      return undefined;
    }

  },
});
