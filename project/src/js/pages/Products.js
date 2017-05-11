import React from "react";
import Gallery from '../components/Gallery';
export default class Products extends React.Component {
  render(){
    const cardDetail = [
      {
        image: 'Images/1B4-003A-00066-01.jpg',
        itemNumber: '$100.00',
        itemName: 'item 1',
        itemDetail: 'item description'
      },
      {
        image: 'Images/23-126-050-03.jpg',
        itemNumber: '$250.00',
        itemName: 'item 2',
        itemDetail: 'item description'
      },
      {
        image: 'Images/26-950-001-08.jpg',
        itemNumber: '$300.00',
        itemName: 'item 3',
        itemDetail: 'item description'
      },
      {
        image: 'Images/33-122-671-08.jpg',
        itemNumber: '$280.00',
        itemName: 'item 4',
        itemDetail: 'item description'
      },
      {
        image: 'Images/74-129-075-S01.jpg',
        itemNumber: '$60.00',
        itemName: 'item 5',
        itemDetail: 'item description'
      },
      {
        image: 'Images/75-220-054-V01.jpg',
        itemNumber: '$180.00',
        itemName: 'item 6',
        itemDetail: 'item description'
      },
      {
        image: 'Images/75-869-179-04.jpg',
        itemNumber: '$270.00',
        itemName: 'item 7',
        itemDetail: 'item description'
      },
      {
        image: 'Images/75-945-519-06.jpg',
        itemNumber: '$300.00',
        itemName: 'item 8',
        itemDetail: 'item description'
      },
      {
        image: 'Images/79-337-032-16.jpg',
        itemNumber: '$250.00',
        itemName: 'item 9',
        itemDetail: 'item description'
      },
      {
        image: 'Images/2016_keyboard_full_bg.jpg',
        itemNumber: '$40.00',
        itemName: 'item 10',
        itemDetail: 'item description'
      },
      {
        image: 'Images/6833-21039-smps.jpg',
        itemNumber: '$89.00',
        itemName: 'item 11',
        itemDetail: 'item description'
      },
      {
        image: 'Images/pc-microphone-info-for-kide.jpg',
        itemNumber: '$20.00',
        itemName: 'item 12',
        itemDetail: 'item description'
      }
    ];

    return(
      <div>
        <h1>Products</h1>
        <Gallery cardDetail={cardDetail} className={this.props.className} src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}