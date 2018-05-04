import React from 'react';
import './scss/Banner.scss';
import Swiper from 'swiper';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay:3000,
            disableOnInteraction: false
        },//可选选项，自动滑动
        effect : 'fade',
        speed:2000,
        loop:true,
        
    })
  }

  componentWillUnmount(){

  }

  render() {
    return (
        <div className="Banner">
            <div className="common">
                <div className="bannerHeader">
                    <span>全部商品分类</span>
                    <ul className="bannerNav">
                        <li>
                            <h2>配件</h2>
                            <div>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                            </div>
                        </li>
                        <li>
                            <h2>配件</h2>
                            <div>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                            </div>
                        </li>
                        <li>
                            <h2>配件</h2>
                            <div>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                            </div>
                        </li>
                        <li>
                            <h2>配件</h2>
                            <div>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                                <span>常用配件</span>
                            </div>
                        </li>
                    </ul>
                    <ul className="clearfix nav">
                        <li><a href="#">配件</a></li>
                        <li><a href="#">整机</a></li>
                        <li><a href="#">耗材</a></li>
                        <li><a href="#">人工</a></li>
                        <li><a href="#">店铺</a></li>
                        <li><a href="#">团购</a></li>
                        <li><a href="#">联系我们</a></li>
                    </ul>
                </div>
                <div className="bannerContainer swiper-container" id="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="../../assets/imageOther/banner1.png" /></div>
                        <div className="swiper-slide"><img src="../../assets/imageOther/banner2.png" /></div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
  }

  
}

export default Banner;
