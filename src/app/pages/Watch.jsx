import React from 'react';
import LiveVideoLarge from '../components/LiveVideoLarge';


export default class Watch extends React.Component {
  render() {
    let search = this.props.location.search;
    let params = new URLSearchParams(search);
    let v = params.get('v');
    return (
      <div>
        <LiveVideoLarge id="featured-live" liveurl={v} />
        <div className="single-video-title">Individual Livestream ({v})</div>
      </div>
    );
  }
}
