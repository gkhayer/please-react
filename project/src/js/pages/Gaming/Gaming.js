import React, {Components} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { Row, Col, Grid, Carousel, Nav, NavItem} from 'react-bootstrap';
import './Gaming.css';

import VerticalNav from '../../components/VerticalNav';

export default class Gaming extends React.Component {

  render() {
    return(
      <div className="gaming">
        <div className="gaming-carousel">
          <Carousel>
            <Carousel.Item>
              <img width={1200} height={500} alt="gaming" src="../../Images/gaming/game1.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={500} alt="gaming" src="../../Images/gaming/game2.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={500} alt="gaming" src="../../Images/gaming/game3.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={500} alt="gaming" src="../../Images/gaming/game4.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={500} alt="gaming" src="../../Images/gaming/game5.jpg"/>
            </Carousel.Item>
          </Carousel>
        </div>
        <VerticalNav />
      </div>
    )
  }
}
