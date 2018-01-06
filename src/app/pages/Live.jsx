import React from 'react';
import LiveVideo from '../components/LiveVideo.jsx'
import StreamsParser from '../util/StreamsParser';


export default class Live extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  }
  render() {
    let streamsParser = new StreamsParser();
    let streamList =  /*['11', '22', '333', '4444']*/ streamsParser.constructStreamArray();
    /*[
      "wowza-test.streamroot.io/liveOrigin/Sintel1/playlist.m3u8",
      "wowza-test-beluga.streamroot.io/liveOrigin/TOS720p_baseline/playlist.m3u8",
      "wowza-cloudfront.streamroot.io/liveorigin/stream4/playlist.m3u8",
      "wowza-test-cloudfront.streamroot.io/liveOrigin/sintel-live.smil/playlist.m3u8",
      "hss-m05.live-aka.canal-plus.com/live/hss/cnews-clair-hd/hd-clair.isml/manifest",
      "wowza-test-cloudfront.streamroot.io/liveOrigin/Sintel1/playlist.m3u8",
      "wowza-test.streamroot.io/liveOrigin/sintel-live.smil/playlist.m3u8",
      "ios-test",
      "wowza-test.streamroot.io/liveOriginVariable/bbb1000-var/playlist.m3u8",
      "wowza-test.streamroot.io/liveOrigin/sintel-live.smil/manifest.mpd",
      "wowza-test.streamroot.io/liveOriginTimestamps/bbb_30fps_live.smil/playlist.m3u8",
      "testseven-i.akamaihd.net/hls/live/263687/test1/master.m3u8",
      "192.168.0.149/nab/snow/playlist.m3u8",
      "wowza-test-cloudfront.streamroot.io/liveOrigin/BBB-bl-1500/playlist.m3u8",
      "wowza-test.streamroot.io/liveOrigin/Sintel_baseline30/playlist.m3u8",
      "wowza-test-cloudfront.streamroot.io/liveOriginTimestamps/bbb_30fps_live_5levels.smil/playlist.m3u8",
      "wowza-test-cloudfront.streamroot.io/liveOrigin/TOS720p_baseline/playlist.m3u8",
      "test",
      "wowza-test-beluga.streamroot.io/liveOrigin/sintel-live.smil/playlist.m3u8",
      "wowza-test-beluga.streamroot.io/liveOrigin/Sintel1/playlist.m3u8",
      "wowza-test.streamroot.io/liveOrigin/BBB-bl-1500/playlist.m3u8",
      "toto"
    ]*/

    console.log('streamList:');
    console.log(streamList);

    let streamComponents = streamList.map(function(s, i) {
      console.log('s: ' + s);
      return <LiveVideo key={i} id={'idstr' + i} liveurl={s} />
    })

    console.log('streamComponents:');
    console.log(streamComponents);


    return (
      <div>
        { streamComponents }
      </div>
    );
  }
}