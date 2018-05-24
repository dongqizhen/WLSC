import React from 'react';
import { Header } from '../common/Header.jsx';
import Breadcrumb from '../common/Breadcrumb.jsx';
import './scss/ProductDetails.scss';



class Chooseamount extends React.Component{
    constructor(){
        super()
        this.state={
            inputVal:1
        }
    }


    _addNumber(){
        console.log()
       this.setState({
           inputVal:++this.state.inputVal
       })
     }
   
     _handleChange(e){
       this.setState({
           inputVal:e.target.value
       })
     }

    render(){
        return(
            <div className="Chooseamount clearfix">
                <input type="text" onChange={this._handleChange.bind(this)} value={this.state.inputVal} />
                <p>
                    <span onClick={this._addNumber.bind(this)}>+</span>
                    <span className="disabled" disabled="disabled">-</span>
                </p>
            
            </div>
        )
    }
} 

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = { 
        //inputVal:1
    };
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
   //let {inputVal} = this.state;
    return (
        <div className="productDetails">
            <Header bannerHeaderStyle={false} />
            <div className="container">
                <Breadcrumb />
                
                <div className="magnifier_container clearfix">
                    <div className="left">
                        <div className="magnifier">
                                <a className="magnifier-thumb-wrapper" href="#">
                                    <img id="thumb" src="../../assets/imageOther/banner1.png" />
                                </a>
                                <div className="magnifier-preview" id="preview"></div>
                            </div>
                            <div className="addCar">
                                <h2>
                                    <span>团购</span>
                                    Panasonic/松下家用上臂式全自动血压计EW3106全国联保血压测量仪
                                </h2>
                                <div className="price_box">
                                    <div className="price">
                                        <span>价格</span>
                                        <a>¥</a>
                                        23000
                                    </div>
                                    <ul className="clearfix">
                                        <li><i></i>收藏量<span>25</span></li>
                                        <li><i></i>浏览量<span>25</span></li>
                                    </ul>
                                </div>
                                <div className="combo clearfix">
                                    <span>套餐</span>
                                    <ul className="clearfix">
                                        <li>默认<i></i></li>
                                        <li>套餐一<i></i></li>
                                        <li>套餐二<i></i></li>
                                    </ul>
                                </div>
                                <div className="Stock clearfix">
                                    <span>数量</span>
                                    <Chooseamount />
                                    库存99件
                                </div>
                                <div className="btn">
                                <i></i>加入购物车</div>
                            </div>
                    </div>
                    <div className="right">
                        <div className="store">
                            <a><i></i><img src="../../assets/imageOther/banner1.png" alt=""/></a>
                            <p>北京惠安达医疗设备责任有限公司</p>
                            <span>收藏店铺</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
           
        </div>
    );
  }

  
}

export default ProductDetails;
