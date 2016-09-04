Profiles = new Mongo.Collection('profiles');

var INTEREST_FIELDS = ["Arts", "Food", "Economics", "Education", "History", "Books", "Music", "Movie", "Celebrities", "Pets", "Culture", "Business"];

Profiles.attachSchema(
    new SimpleSchema({
        userId: {
            type: String,
            autoValue: function() {
                if(this.isInsert) {
                    return Meteor.userId();
                } else if(this.isUpsert) {
                    return {
                        $setOnInsert: Meteor.userId()
                    }
                } else {
                    this.unset();
                }
            },
            denyUpdate: true
        },
        name: {
            type: String,
            label: "Full Name",
            max: 128
        },
        nickname: {
            type: String,
            label: "Nick Name",
            max: 128
        },
        location: {
            type: String,
            label: "Location",
            max: 256
        },
        contact: {
            type: String,
            label: "Contact Info",
            max: 1024
        },
        interest: {
            type: [String],
            label: "Interested In",
            allowedValues: INTEREST_FIELDS,
        },
        description: {
            type: String,
            label: "Description",
            max: 10000,
            autoform: {
                afFieldInput: {
                    type: 'summernote',
                    settings: {
                        height: 300,
                        minHeight: 300,
                        toolbar: [
                            ['style', ['style']],
                            ['font', ['bold', 'italic', 'underline', 'clear']],
                            ['para', ['ul', 'ol']],
                            ['insert', ['link', 'hr']]
                        ],
                        styleWithSpan: false
                    }
                }
            }
        },
        createdAt: {
            type: Date,
            autoValue: function() {
                if (this.isInsert) {
                    return new Date();
                } else if (this.isUpsert) {
                    return {
                        $setOnInsert: new Date()
                    };
                } else {
                    this.unset();
                }
            },
            denyUpdate: true
        },
        updatedAt: {
            type: Date,
            autoValue: function() {
                if (this.isUpdate) {
                    return new Date();
                }
            },
            denyInsert: true,
            optional: true
        }
    })
);