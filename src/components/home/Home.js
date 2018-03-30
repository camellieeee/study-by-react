/**
 * Created by turing on 2018/3/30.
 */
import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

class Home extends Component {
  render() {
    return (
      <div>
        <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
        <br/>
        <Link to="/friends">
          I`m Home , hello friends
        </Link>
      </div>
    );
  }
}

export default Home;
