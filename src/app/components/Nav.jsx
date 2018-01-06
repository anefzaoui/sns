import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-section">
          <NavLink exact to="/" activeClassName="selected"><i className="fa fa-home" aria-hidden="true"></i><span>Home</span></NavLink>
          <NavLink to="/live" activeClassName="selected"><i className="fa fa-video-camera" aria-hidden="true"></i><span>Live Now</span></NavLink>
          <NavLink to="/statistics" activeClassName="selected"><i className="fa fa-pie-chart" aria-hidden="true"></i><span>Statistics</span></NavLink>
        </div>
      </div>
    );
  }
}
