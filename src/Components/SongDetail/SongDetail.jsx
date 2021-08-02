import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song....</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title} <br />
        Durations: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToprops = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};
export default connect(mapStateToprops)(SongDetail);
