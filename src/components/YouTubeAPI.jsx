import React from 'react';

function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: {(video_id)
    },
        playerVars: {
        'playsinline': 1
    },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
    };

export default onYouTubeIframeAPIReady;