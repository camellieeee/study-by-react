/**
 * Created by turing on 2018/3/30.
 */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Mine extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          I`m Mine , hello home
        </Link>
      </div>
    );
  }
}

export default Mine;
