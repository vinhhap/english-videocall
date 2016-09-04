Template.profileView.helpers({
    profile: function() {
        var profileId = FlowRouter.getParam('profileId');
        return Profiles.findOne({_id: profileId});
    }
});