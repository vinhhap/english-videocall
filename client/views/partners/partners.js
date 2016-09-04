Template.partners.helpers({
    users: function() {
        return Meteor.users.find({});
    }
});