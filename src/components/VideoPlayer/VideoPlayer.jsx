import React from 'react';


const VideoPlayer = ({ selectedVideo }) => {
    if (!selectedVideo) return <div>Please select a video.</div>

    const srcVid = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>
            <iframe id="youtubeplayer" width="560" height="315" type="text/html" width="1000" height="562.5"
                src={srcVid}
                frameborder="0">
            </iframe>
            <h2>{selectedVideo.snippet.title}</h2>
            <h4>{selectedVideo.snippet.channelTitle}</h4>
            <p>{selectedVideo.snippet.description}</p>
        </div >
    );
};

export default VideoPlayer;
