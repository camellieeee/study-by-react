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
  constructor(props, context) {
    super(props);
    this.state = {
      imageData: [//图片数据
        {
          url: require('../../images/1.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/2.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/3.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/4.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/5.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/6.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/7.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/8.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/9.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        },
        {
          url: require('../../images/10.jpg'),
          title: 'KAI',
          desc: 'Love BaLi'
        }
      ]
    }
  }

  render() {
    return (
      <section className="content">
        {
          this.state.imageData && this.state.imageData.map((item, i)=> {
            return (
              <img key={i} src={item.url} alt=""/>
            )
          })
        }
        {/*<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />*/}
        <Link to="/friends">
          I`m Home , hello friends
        </Link>
      </section>
    );
  }
}

export default Home;
