import React from 'react';
import LiveVideo from '../components/LiveVideo.jsx'
import StreamsParser from '../util/StreamsParser';


export default class Live extends React.Component {
  render() {
    let streamsParser = new StreamsParser();
    /**
     * let streamList = streamsParser.constructStreamArray();
     * Commented until a solution can be found for the empty Array bug.
     * Below is the actual true array that we're supposed to get, including
     * "ios-test", "test", and "toto"
     */
    let streamList = [
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
    ]

    let streamComponents = streamList.map(function(s, i) {
      return <LiveVideo key={i} id={'idstream' + i} liveurl={s} />
    })

    return (
      <div>
        { streamComponents }
      </div>
    );
  }
}
