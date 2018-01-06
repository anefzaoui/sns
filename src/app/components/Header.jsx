import React from 'react';

export default class Header extends React.Component {
  render() {
    console.log("home");
    return (
      <div className="header">
        <div className="logo"><span>Streams</span>NStats</div>
      </div>
    );
  }
}
