import { func } from "prop-types";
import React from "react";
import { render } from "react-dom";
import "./VideoSearchForm.css"

const VideoSearchForm = (props) {

    render() {
        return (
            < div className="searchforvideo-nav" >
                <h3>Search for Video</h3>
                <h3>Search for Video</h3>
                <form onSubmit={props.handleSubmit}>
                    <label for="search"> Search: </label>
                    <input
                        type="text"
                        name="search"
                        onChange={props.handleChange}
                        value={props.state.search}
                    />
                    <button type="submit"> Search </button>
                </form>
            </div >
        )
    }


    export default VideoSearchForm;