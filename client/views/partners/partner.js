Template.partner.helpers({
    profile: function() {
        var userId = Template.instance().data._id;
        return Profiles.findOne({userId: userId});
    }
});