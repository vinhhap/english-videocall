Template.videoCall.onCreated(function() {
    var userVideo = new Promise(function(resolve, reject) {
        navigator.getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
        navigator.getUserMedia({audio: true, video: true}, function(stream) {
            var video = $('#my-video');
            video.attr('src', URL.createObjectURL(stream));
            resolve(stream);

        }, function(error) {
            reject(error);
        });
    });

    
    userVideo.then(function(stream) {
        var remoteId = FlowRouter.getParam("userId");
        console.log(remoteId);
        if(peer) {
            var outgoingCall = peer.connect(remoteId);
            outgoingCall.on('open', function(data) {
                outgoingCall.send("fick");
            });
            outgoingCall.on('data', function(data) {
                console.log(data);
            });
        }

    });
    
});