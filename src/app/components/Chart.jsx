import React from 'react';

export default class Chart extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(props) {
    
  }
  render() {
    return (
      <div className='chart-container'>
        <div className="chart-title">{this.props.title}</div>
        <div className={'chart-body ' +  this.props.chartClass}></div>
        <div className="chart-keys"></div>
      </div>
    );
  }
}
