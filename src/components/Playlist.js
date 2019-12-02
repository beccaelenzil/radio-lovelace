import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

const calculatePlayTime = (tracks) => {
  let minutes = 0;
  let seconds = 0;
  tracks.forEach((track) => {
    const times = track.playtime.split(':');
    minutes += parseInt(times[0]);
    seconds += parseInt(times[1]);
  });

  minutes += Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  seconds = ("" + seconds).padStart(2, "0");
  minutes = ("" + minutes).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

class Playlist extends React.Component {

  constructor(props){
    super(props)
    //this.state = {
    //  tracks: this.props.tracks
    //}
  }

  toggleFavorite = (trackIndex, side) => {
    console.log("toggle in playlist")
    this.props.toggleCallback(trackIndex, side)
  }

  moveToTop = (trackIndex, side) => {
    console.log(`Move To Top in Playlist `, trackIndex)
    this.props.moveToTopCallback(trackIndex, side)
  }

  organizeTracks = () => {
      const trackElements = this.props.tracks.map((track, i) => {
        // We use "spread syntax" here to pass in all the properties of 
        // the variable 'track' as props. Go look it up!
        return (
          <Track
            key={i}//{track.id}
            index={i}
            moveToTopCallback={this.moveToTop}
            toggleCallback={this.toggleFavorite}
            side={this.props.side}
            {...track}
          />
        );
      });
      return trackElements
  }

  render() {
    const trackElements = this.organizeTracks()
    const trackCount = this.props.tracks.length;
    const playtime = calculatePlayTime(this.props.tracks);

    return (
    <div className="playlist">
      <h2>{this.props.side} Playlist</h2>
      <p>
        {trackCount} tracks - {playtime}
      </p>
      <ul className="playlist--track-list">
        {trackElements}
      </ul>
    </div>
  );
  }
}

Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
