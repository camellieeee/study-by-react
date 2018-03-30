require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './home/Home';
import Friends from './friends/Friends';
import Mine from './mine/Mine';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/friends">朋友圈</Link></li>
          <li><Link to="/mine">我的</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/friends" component={Friends}/>
          <Route exact path="/mine" component={Mine}/>
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
