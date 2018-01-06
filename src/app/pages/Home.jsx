import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    var player = new Clappr.Player({
      source: "http://wowza-test.streamroot.io/liveOrigin/Sintel1/playlist.m3u8",
      parentId: "#featured-live",
      height: 360,
      width: 640
    });
  }
  render() {
    console.log("home");
    return (
      <div>
        <div className="featured-video-title">Featured Livestream</div>
        <div id="featured-live"></div>
      </div>
    );
  }
}
