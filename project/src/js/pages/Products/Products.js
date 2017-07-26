import React from "react";
import Gallery from '../../components/Gallery';
export default class Products extends React.Component {
  render(){
    const cardDetail = [
      {
        image: 'Images/products/1B4-003A-00066-01.jpg',
        itemPrice: '$100.00',
        itemName: 'item 1',
        itemDetail: 'Microsoft server'
      },
      {
        image: 'Images/products/23-126-050-03.jpg',
        itemPrice: '$250.00',
        itemName: 'item 2',
        itemDetail: 'Remote'
      },
      {
        image: 'Images/products/26-950-001-08.jpg',
        itemPrice: '$300.00',
        itemName: 'item 3',
        itemDetail: 'KOR'
      },
      {
        image: 'Images/products/33-122-671-08.jpg',
        itemPrice: '$280.00',
        itemName: 'item 4',
        itemDetail: 'NETGEAR EX7000 AC1900 Wireless Dual Band Gigabit Range Extender'
      },
      {
        image: 'Images/products/74-129-075-S01.jpg',
        itemPrice: '$60.00',
        itemName: 'item 5',
        itemDetail: 'Resident Evil CD'
      },
      {
        image: 'Images/products/75-220-054-V01.jpg',
        itemPrice: '$180.00',
        itemName: 'item 6',
        itemDetail: 'Smsung Galaxy 86'
      },
      {
        image: 'Images/products/75-869-179-04.jpg',
        itemPrice: '$270.00',
        itemName: 'item 7',
        itemDetail: 'Ear Phones wireless'
      },
      {
        image: 'Images/products/75-945-519-06.jpg',
        itemPrice: '$300.00',
        itemName: 'item 8',
        itemDetail: 'Head set wireless'
      },
      {
        image: 'Images/products/79-337-032-16.jpg',
        itemPrice: '$250.00',
        itemName: 'item 9',
        itemDetail: 'Video game remote'
      },
      {
        image: 'Images/products/2016_keyboard_full_bg.jpg',
        itemPrice: '$40.00',
        itemName: 'item 10',
        itemDetail: 'Keyboard'
      },
      {
        image: 'Images/products/6833-21039-smps.jpg',
        itemPrice: '$780.00',
        itemName: 'item 11',
        itemDetail: 'Server'
      },
      {
        image: 'Images/products/pc-microphone-info-for-kide.jpg',
        itemPrice: '$20.00',
        itemName: 'item 12',
        itemDetail: 'Mike'
      },
      {
        image: 'Images/products/6833-21039-smps.jpg',
        itemPrice: '$99.99',
        itemName: 'item 13',
        itemDetail: 'Server'
      },
      {
        image: 'Images/products/2TS-0008-00036-S03.jpg',
        itemPrice: '$12.00',
        itemName: 'item 14',
        itemDetail: 'battlefield CD'
      },{
        image: 'Images/products/Battlefield1.jpg',
        itemPrice: '$10.00',
        itemName: 'item 15',
        itemDetail: 'Battlefield 1'
      },
      {
        image: 'Images/products/mac-accessories.jpg',
        itemPrice: '$350.00',
        itemName: 'item 17',
        itemDetail: 'mac Accessories'
      },
      {
        image: 'Images/products/32-166-138-15.jpg',
        itemPrice: '$560.00',
        itemName: 'item 18',
        itemDetail: 'CGW Cover'
      },
      {
        image: 'Images/products/CPU.jpg',
        itemPrice: '$700.00',
        itemName: 'item 19',
        itemDetail: 'CPU'
      },
      {
        image: 'Images/products/dell-shop-desktops.jpg',
        itemPrice: '$350.00',
        itemName: 'item 20',
        itemDetail: 'Dell shop desktops'
      },
      {
        image: 'Images/products/gameremot.jpg',
        itemPrice: '$90.00',
        itemName: 'item 21',
        itemDetail: 'Game Remote'
      },
      {
        image: 'Images/products/image_adapt_full.jpg',
        itemPrice: '$90.00',
        itemName: 'item 22',
        itemDetail: 'Mobile Adaptor'
      },
      {
        image: 'Images/products/razer_mouse gaming.jpg',
        itemPrice: '$400.00',
        itemName: 'item 24',
        itemDetail: 'razer_mouse gaming'
      },
      {
        image: 'Images/products/redmouse.jpg',
        itemPrice: '$80.00',
        itemName: 'item 25',
        itemDetail: 'red mouse'
      },
      {
        image: 'Images/products/A4X7_1_2014120394446664.jpg',
        itemPrice: '$150.00',
        itemName: 'item 28',
        itemDetail: 'Tablet'
      },
      {
        image: 'Images/products/A5E6_1306082618092262422eAt8qEDF4.jpg',
        itemPrice: '$250.00',
        itemName: 'item 29',
        itemDetail: 'DF'
      },
      {
        image: 'Images/products/mac-storage.jpg',
        itemPrice: '$860.00',
        itemName: 'item 30',
        itemDetail: 'mac-storage'
      },
      {
        image: 'Images/products/dell-shop-desktops.jpg',
        itemPrice: '$500.00',
        itemName: 'item 23',
        itemDetail: 'mice Corsair — MIce High performance DDR3 and DDR4png'
      },
      {
        image: 'Images/products/83-104-189-S03.jpg',
        itemPrice: '$50.00',
        itemName: 'item 27',
        itemDetail: 'Speakers'
      },
      {
        image: 'Images/products/6833-21039-smps.jpg',
        itemPrice: '$190.00',
        itemName: 'item 16',
        itemDetail: 'Server 2'
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