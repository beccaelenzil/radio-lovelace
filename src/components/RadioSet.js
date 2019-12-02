import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    };
  }

  toggleFavorite = (trackIndex, side) => {
    let theTracks = this.state[side]
    let theTrack = theTracks[trackIndex]
    theTrack.favorite = !theTrack.favorite
    this.setState({[side]: theTracks})
  }

  moveToTop = (trackIndex, side) => {
    let theTracks = this.state[side]
    const theTrack = theTracks.splice(trackIndex, 1)
    let updatedTracks = theTrack.concat(theTracks)
    this.setState({[side]: updatedTracks})
  }

  togglePlaylist = (trackIndex, side) => {
    let theTracks = this.state[side]
    let theTrack = theTracks.splice(trackIndex, 1)

    let oppositeSide
    if (side==="morningTracks"){
      oppositeSide = "eveningTracks"
    }else if (side==="eveningTracks"){
      oppositeSide = "morningTracks"
    }

    let oppositeTracks = this.state[oppositeSide]
    oppositeTracks.push(theTrack)
    console.log(`opposite tracks: `,oppositeTracks)

    this.setState({[side]: theTracks, [oppositeSide]: oppositeTracks})
  }

  render(){

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="morningTracks"
            tracks={this.state.morningTracks}
            moveToTopCallback={this.moveToTop}
            toggleFavoriteCallback={this.toggleFavorite}
            togglePlaylistCallback={this.togglePlaylist}
          />
          <Playlist
            side="eveningTracks"
            tracks={this.state.eveningTracks}
            moveToTopCallback={this.moveToTop}
            toggleFavoiteCallback={this.toggleFavorite}
            togglePlaylistCallback={this.togglePlaylist}
          />
        </section>
      </div>
  );
}
};

export default RadioSet;