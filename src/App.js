import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Video from './components/Video/Video';
import axios from 'axios';


class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        comments: [],
    }

    onVideoSelection = (video) => {
        this.setState({ selectedVideo: video })
        this.getComments();
        console.log("in onVideoSelection", this.state.comments);
    }
    onHandleSubmit = async (searchTerms) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                key: 
                }
            })
        }
    }

    return
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="body">
                            <VideoPlayer />
                            <Video />

                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;