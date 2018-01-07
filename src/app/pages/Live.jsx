import React from 'react';
import LiveVideo from '../components/LiveVideo.jsx'
import StreamsParser from '../util/StreamsParser';


export default class Live extends React.Component {
  render() {
    let streamsParser = new StreamsParser();
    let streamList = streamsParser.constructStreamArray();

    console.log('streamList:');
    console.log(streamList.length);

    let streamComponents = streamList.map(function(s, i) {
      console.log('s: ' + s);
      return <LiveVideo key={i} id={'idstream' + i} liveurl={s} />
    })

    console.log('streamComponents:');
    console.log(streamComponents.length);


    return (
      <div>
        { streamComponents }
      </div>
    );
  }
}
