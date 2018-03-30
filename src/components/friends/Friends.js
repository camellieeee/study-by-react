/**
 * Created by turing on 2018/3/30.
 */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Friends extends Component {
  render() {
    return (
      <div>
        <Link to="/mine">
          I`m friends , hello mine
        </Link>
      </div>
    );
  }
}

export default Friends;
