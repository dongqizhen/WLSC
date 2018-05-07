import React from 'react';
import './scss/Banner.scss';
import Swiper from 'swiper';
import indexActions from '../../actions/indexActions.jsx';
import indexStores from '../../stores/indexStores.jsx';
import dispatchs from '../../dispatchs/Dispatch.jsx'

class BannerHideContainer extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
  

    render(){
       return(
            <div className="bannerHideContainer">
                <ul>
                    <li className="clearfix">
                        <div className="left">推荐分类</div>
                        <div className="right">
                            <span>治疗机用X射线管</span>
                            <span>施源器</span>
                            <span>X射线管组件</span>
                            <span>限束装置</span>
                            <span>防散射滤线栅</span>
                            <span>治疗机用X射线管</span>
                            <span>限束装置</span>
                        </div>
                    </li>
                    <li className="clearfix">
                        <div className="left">超声影像类</div>
                        <div className="right">
                            <span>超声耦合垫</span>
                            <span>超声水囊</span>
                            <span>超声探头</span>
                            <span>超声探头穿刺架</span>
                        </div>
                    </li>
                    <li className="clearfix">
                        <div className="left">推荐分类</div>
                        <div className="right">
                            <span>治疗机用X射线管</span>
                            <span>施源器</span>
                            <span>X射线管组件</span>
                            <span>限束装置</span>
                            <span>防散射滤线栅</span>
                            <span>治疗机用X射线管</span>
                            <span>限束装置</span>
                        </div>
                    </li>
                </ul>
            </div>
        ) 
    }
    
}

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
        stores:indexStores.getAllStore(),
        json:{
            "配件":["常用配件","超声配件","电子配件","手术配件"],
            "整机":["超声配件","超声配件","超声配件","手术配件"],
            "耗材":["常用配件","超声配件","电子配件","手术配件"],
            "租赁":["常用配件","超声配件","电子配件","手术配件"],
        }
    };
  }


  componentDidMount() {
        this.mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay:3000,
            disableOnInteraction: false
        },//可选选项，自动滑动
        effect : 'fade',
        speed:2000,
        loop:true,
        
    })

    indexStores.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount(){
    //indexStores.removeChangeListener(this._onChange.bind(this));
    this.mySwiper.destroy()
  }

  mouseEnterEvent(n){
    dispatchs.dispatch({
        actionType:indexActions.BANNER_MOUSE_ENTER,
        currentIndex:n
    })
  }

  mouseLeaveEvent (){
    dispatchs.dispatch({
        actionType:indexActions.BANNER_MOUSE_LEAVE
    })
  }

  _onChange(){
      this.setState({
          stores:indexStores.getAllStore()
      })
  }

  render() {
    let elementArr=[] , n=0;
    for(let key in this.state.json){
        let str = (
            <li className={`listItem-${n++}`} key={key} onMouseEnter={this.mouseEnterEvent.bind(this,n)} onMouseLeave={this.mouseLeaveEvent.bind(this)}>
            <h2><i></i><span> {key} </span></h2><div className="moudel">
                {
                    this.state.json[key].map((value,key)=>
                        <span key={key}> {value}</span>
                    )
                }

            </div>
           
            {
              this.state.stores.currentIndex==n &&  this.state.stores.BannerHideBoxIsShow && <BannerHideContainer />
            }
            </li>
        )

        elementArr.push(str)
    }

    return (
        <div className="Banner">
            <div className="common">
                <div className="bannerHeader">
                    <span>全部商品分类</span>
                    <ul className="bannerNav">
                        {elementArr}
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
