import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
//const Track = ({title, artist, playtime, albumart, favorite}) => {

  const Track = (props) => {

  const handleCheckBox = () => {
    console.log("toggle in track")
    props.toggleFavoriteCallback(props.index, props.side)
  }

  const handleTrackToTop = () => {
    props.moveToTopCallback(props.index, props.side)
  }

  const handleTogglePlaylist = () => {
    props.togglePlaylistCallback(props.index, props.side)
  }


  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${props.title}`} src={props.albumart} />
      <h3 className="track--title">{props.title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={!props.favorite}
        onChange={handleCheckBox}
      />
      <p className="track--artist">{props.artist}</p>
      <p className="track--playtime">{props.playtime}</p>
      <button
        className="track--control track--to-top"
        onClick={handleTrackToTop}>
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        onClick={handleTogglePlaylist}
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
};

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
