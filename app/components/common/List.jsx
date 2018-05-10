import React from 'react';
import './scss/List.scss';
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
              <div className="item">
                  <div className="proImg">
                      <img src="../../assets/imageOther/banner1.png" alt=""/>
                  </div>
                  <div className="itemText">
                  {console.log(this.props)}
                       <h2>{this.props.item.productName}</h2>
                       <div className="brandAndModel clearfix">
                            <div className="wordWrap brandBox left">
                                <span>品牌:</span><span className="brandName">{this.props.item.brandName}飞利浦飞利浦飞利浦飞利浦</span>
                            </div>
                            <div className="wordWrap modelBox right">
                                <span>型号:</span><span className="modelName">{this.props.item.modelName}飞利浦测试1号2号3号</span>
                            </div>
                       </div>
                       <div className="saleNumAndPrice clearfix">
                            <div className="left saleNum"><span>销量:</span><span className="number">{this.props.item.saleNumber}123456</span></div>
                            <div className="right price"><span className="priceImg">￥</span><span className="priceValue">{this.props.item.price}123456789</span></div>
                       </div>

                  </div>
                  <div className="itemName clearfix">
                      <img src="../../assets/images/photo.png" alt=""/>
                      <span className="right">北京华脉诚信科技有限公司北京华脉诚信科技有限公司</span>
                  </div>
              </div>
          </div>
        );
    }
}