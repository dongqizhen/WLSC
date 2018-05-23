import React from 'react';
import { Header } from '../common/Header.jsx';
import Breadcrumb from '../common/Breadcrumb.jsx';
import './scss/ProductDetails.scss'

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = { };
  }


  componentDidMount() {
   const evt = new Event(),
         m = new Magnifier(evt);
         m.attach({
            thumb: '#thumb',
            large: '../../assets/imageOther/banner1.png',
            largeWrapper: 'preview',
            zoomable:true
        });
  }


  render() {
    return (
        <div className="productDetails">
            <Header bannerHeaderStyle={false} />
            <div className="container">
                <Breadcrumb />
                <div className="magnifier">
                    <a className="magnifier-thumb-wrapper" href="#">
                        <img id="thumb" src="../../assets/imageOther/banner1.png" />
                    </a>
                    <div className="magnifier-preview" id="preview"></div>
                </div>
            </div>
            
        </div>
    );
  }

  
}

export default ProductDetails;
