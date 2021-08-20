import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';


class App extends Component {

    constructor(props) {
        super(props);
        this.Comments = [

        ];
    }
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