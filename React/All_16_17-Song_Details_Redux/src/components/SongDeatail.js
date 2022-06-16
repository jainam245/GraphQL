import React from "react";
import { connect } from "react-redux";

//Song details Components
const SongDetail = ({ song }) => {
    console.log(song);
    if (!song) {
        return <div>Song does not exit</div>;
    }
    return (
        <div>
            <h3>Details for: </h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};
const mapstateToProps = (state) => {
    console.log(state.selectedSong);
    return { song: state.selectedSong }
};

export default connect(mapstateToProps)(SongDetail);