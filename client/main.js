import Peer from 'peerjs';

Accounts.onLogin(function() {
    window.peer = new Peer(Meteor.userId(), {
        host: 'dcmme.herokuapp.com',
        key: 'peerjs',
        secure:true, port:443,
        debug: 3,
        config: {'iceServers': [
            { url: 'stun:stun.l.google.com:19302' },
            { url: 'turn:homeo@turn.bistri.com:80', credential: 'homeo' }
        ]}
    });

    peer.on('open', function() {
        console.log(peer.id);
    });

    peer.on('connection', function(data) {
        data.on('data', function(data) {
            console.log(data);
        })
    });
});