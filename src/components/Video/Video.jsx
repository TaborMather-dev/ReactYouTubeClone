import React from 'react';

const Video = ({ video, onVideoSelect }) => {
    if (!video) return <div></div>

    return (
        <div className="video" onClick={() => onVideoSelect(video)}>
            <img className="video__thumbnail" src={video.snippet.thumbnails.default.url} alt="" />
            <div className="video__text">
                <h3>{video.snippet.title}</h3>
                <p className="video__headline">{video.snippet.channelTitle}</p>
            </div>
        </div>
    )
}

export default Video;