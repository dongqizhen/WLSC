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
            large: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/400px-Starry_Night_Over_the_Rhone.jpg',
            largeWrapper: 'preview'
        });
  }


  render() {
    return (
        <div className="productDetails">
            <Header bannerHeaderStyle={false} />
            <div className="container">
                <Breadcrumb />
                <div className="magnifier">
                    <a className="magnifier-thumb-wrapper" href="http://en.wikipedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg">
                        <img id="thumb" src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/200px-Starry_Night_Over_the_Rhone.jpg" />
                    </a>
                    <div className="magnifier-preview" id="preview" style={{width: "200px", height: "133px"}}>Starry Night Over The Rhone<br />by Vincent van Gogh</div>
                </div>
            </div>
            
        </div>
    );
  }

  
}

export default ProductDetails;
