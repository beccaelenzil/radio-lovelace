import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //tracks: props.tracks,
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    };
  }

  /*
  splitTracks = () => {
    console.log(`Radio set for ${this.state.tracks.length} tracks`);
    const playlists = {
      morningTracks: this.state.tracks.slice(0, this.state.tracks.length / 2),
      eveningTracks: this.state.tracks.slice(this.state.tracks.length / 2, this.state.tracks.length)
    };

    return playlists
  }
  */
  toggleFavorite = (trackIndex, side) => {
    console.log("toggle in radioset")
    if (side === "Morning"){
      let theTracks = this.state.morningTracks
      const theTrack = theTracks[trackIndex]
      theTrack.favorite = !theTrack.favorite
      this.setState({morningTracks: theTracks})
    }else if (side === "Evening"){
      let theTracks = this.state.eveningTracks
      const theTrack = theTracks[trackIndex]
      theTrack.favorite = !theTrack.favorite
      console.log(theTracks[trackIndex].favorite)
      this.setState({eveningTracks: theTracks})
    }
  }


  moveToTop = (trackIndex, side) => {
    console.log(`Move To Top RadioSet `,trackIndex)
    if (side === "Morning"){
      let theTracks = this.state.morningTracks
      const theTrack = theTracks.splice(trackIndex, 1)
      let updatedTracks = theTrack.concat(theTracks)
      this.setState({morningTracks: updatedTracks})
    }else if (side === "Evening"){
      let theTracks = this.state.eveningTracks
      const theTrack = theTracks.splice(trackIndex, 1)
      let updatedTracks = theTrack.concat(theTracks)
      this.setState({eveningTracks: updatedTracks})
    }
  }

  render(){

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningTracks}
            moveToTopCallback={this.moveToTop}
            toggleCallback={this.toggleFavorite}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
            moveToTopCallback={this.moveToTop}
            toggleCallback={this.toggleFavorite}
          />
        </section>
      </div>
  );
}
};

export default RadioSet;