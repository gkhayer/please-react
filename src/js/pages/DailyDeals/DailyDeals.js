import React, {Components} from 'react';
import CouponLayout from '../../components/CouponLayout';


export default class DealsDaily extends React.Component {
  constructor(){
    super();
    this.updateTime = this.updateTime.bind(this);
  }

  state = {
    date:  undefined,
  }

  updateTime(){
   this.setState({date: (new Date()).toLocaleTimeString()});
  }

  componentWillMount() {
    this.timer = setInterval(this.updateTime, 1000);
    this.updateTime();
  }

  componentWillUnmount() {
    this.timer = clearInterval();
  }

  render(){
    return(
      <div>
        <CouponLayout couponTimer={this.state.date}/>
      </div>
    );
  }
}
