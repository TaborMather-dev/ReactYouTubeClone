import './App.css';
import React, { Component } from 'react';
import VideoSearchForm from './components/VideoSearchForm/VideoSearchForm/';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Video from './components/Video/Video';
import Comment from './components/Comment/Comment';
import axios from 'axios';


class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        comments: []
    }
    async componentDidMount() {
        {
            try {
                let response = await axios.get("http//:127.0.0.1:8000/youtubeclone_app/")
                this.setState({
                    data: response.data
                })
                console.log(response.data)
                if (!response.data) (){
                    finally() => {
                        void (this.componentDidMount)
                    }
                }
                    console.log("error")
                }
            }

    onVideoSelection = async (selectedVideo) => {
        let selectedVideo = this.state.video;
        selectedVideo = video.video_id
        if (video == this.state)
            return (video.video_id)
        }
    }
    onHandleChange = async (event) => {
        
        }
    }

    onHandleSubmit = async (event) => {
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

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="body">
                            <VideoPlayer />
                            <Video />
                            <VideoSearchForm />
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;