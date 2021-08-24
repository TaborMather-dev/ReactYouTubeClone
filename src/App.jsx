import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
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

    return
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="col-md-4">
                            <VideoPlayer />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;