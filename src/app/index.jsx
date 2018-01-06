import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Layout from './pages/Layout';
import Live from './pages/Live';
import Statistics from './pages/Statistics';
import SingleLive from './pages/SingleLive.jsx'


const app = document.getElementById('app');

ReactDOM.render(
  <Router basename="/">
      <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/live" name="live" component={Live}></Route>
          <Route path="/live/:video" name="singlelive" component={SingleLive}></Route>
          <Route path="/statistics" name="statistics" component={Statistics}></Route>
      </Layout>
  </Router>,
app);
