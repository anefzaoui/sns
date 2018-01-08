import React from 'react';
import LiveVideoLarge from '../components/LiveVideoLarge';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="featured-video-title">Featured Livestream</div>
        <div className="large-video-container">
          <LiveVideoLarge id="featured-live" liveurl="https://wowza-test.streamroot.io/liveOrigin/Sintel1/playlist.m3u8" />
          <div className="large-video-subtitle">Viewers: 5</div>
        </div>
      </div>
    );
  }
}
