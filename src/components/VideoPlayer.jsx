import React from 'react';
import './VideoPlayer.css';

function VideoPlayer(props) {
    // var player; {
    //     player = new YT.Player('player', {
    //         height: '390',
    //         width: '640',
    //         videoId: '',
    //         playerVars: {
    //             'playsinline': 1
    //         },
    //         events: {
    //             'onReady': onPlayerReady,
    //             'onStateChange': onPlayerStateChange
    //         }
    //     };


    return (
        <div className='container-fluid'>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0"></iframe>
        </div>
    )
}

export default VideoPlayer;
