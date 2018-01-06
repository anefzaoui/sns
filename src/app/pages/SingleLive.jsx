import React from 'react';

export default class SingleLive extends React.Component {
  componentDidMount() {
    var player = new Clappr.Player({
      source: "http://wowza-test.streamroot.io/liveOrigin/Sintel1/playlist.m3u8",
      parentId: "#single-live",
      height: 360,
      width: 640
    });
  }
  render() {
    console.log("Single Live Video");
    console.log(this.props);
    return (
      <div>
        <div id="single-live"></div>
        <div className="single-video-title">Individual Livestream ({this.props.match.params.video})</div>
      </div>
    );
  }
}
