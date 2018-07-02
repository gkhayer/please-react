import React, {Components} from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Grid, Carousel, Nav, NavItem} from 'react-bootstrap';
import './Gaming.css';

import VerticalNav from '../../components/VerticalNav';
import Gallery from '../../components/Gallery';

export default class Gaming extends React.Component {

  render() {
    return(
      <div className="gaming">
        <div className="gaming-carousel">
          <Carousel>
            <Carousel.Item>
              <img alt="gaming" src="../../Images/gaming/game1.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="gaming" src="../../Images/gaming/game2.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="gaming" src="../../Images/gaming/game3.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="gaming" src="../../Images/gaming/game4.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="gaming" src="../../Images/gaming/game5.jpg"/>
            </Carousel.Item>
          </Carousel>
        </div>
        <VerticalNav />
        <Gallery />
      </div>
    )
  }
}
