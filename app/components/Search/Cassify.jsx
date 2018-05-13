import React from 'react';
import "./scss/Cassify.scss"
import dispatchs from '../../dispatchs/Dispatch.jsx';
import searchActions from '../../actions/searchActions.jsx';
import CassifyStores from '../../stores/CassifyStores.jsx';
class Cassify extends React.Component {
  constructor() {
    super();
    this.state = {
        minValue:"",
        maxValue:""
    };
  }

  componentDidMount(){

  }

  minHandleChange(e){
    this.setState({minValue: e.target.value});
  }

  maxHandleChange(e){
    this.setState({maxValue: e.target.value});
  }

  handleClick(e){
    dispatchs.dispatch({
        actionType:searchActions.CASSIFY_MOUSE_CLICK,
        text:e.target.innerHTML
    })
  }

  render() {
    return (
        <div className="Cassify">
            <ul>
                <li>
                    <span>产品类型</span>
                    <div className="clearfix">
                        <span onClick={this.handleClick.bind(this)}>配件</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>设备团购</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>信息化团购</span>
                        <span>配件</span>
                    </div>
                    <p className="more">
                        更多
                    </p>
                </li>
                <li>
                    <span>二级分类</span>
                    <div className="clearfix">
                        <span>二级分类</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>设备团购</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>信息化团购</span>
                        <span>配件</span>
                    </div>
                </li>
                <li>
                    <span>三级分类</span>
                    <div className="clearfix">
                        <span>治疗机用X射线管</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>设备团购</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>配件</span>
                        <span>信息化团购</span>
                        <span>配件</span>
                    </div>
                </li>
                <li className="trademark">
                    <span>品牌</span>
                    <div className="clearfix">
                        <div className="clearfix top">
                            <span>推荐品牌</span>
                            <p className="clearfix">
                                <span>A-G</span>
                                <span>H-N</span>
                                <span>O-T</span>
                                <span>U-Z</span>
                            </p>
                        </div>
                        <div className="clearfix bottom">
                            <span>治疗机用X射线管</span>
                            <span>配件</span>
                            <span>配件</span>
                            <span>设备团购</span>
                            <span>配件</span>
                            <span>配件</span>
                            <span>配件</span>
                            <span>信息化团购</span>
                            <span>配件</span>
                        </div>
                    </div>
                </li>
                <li className="model">
                    <span>型号</span>
                    <div className="clearfix">
                        <div className="clearfix top">
                           
                            <p className="clearfix">
                                <span>A-G</span>
                                <span>H-N</span>
                                <span>O-T</span>
                                <span>U-Z</span>
                            </p>
                        </div>
                        <div className="clearfix bottom">
                            <span>治疗机用X射线管</span>
                            <span>配件</span>
                            <span>配件</span>
                            <span>设备团购</span>
                            <span>配件</span>
                            <span>配件</span>
                            <span>配件</span>
                            <span>信息化团购</span>
                            <span>配件</span>
                        </div>
                    </div>
                </li>
                <li className="prices">
                    <span>价格区间</span>
                    <div className="clearfix">
                        <input type="text" placeholder="输入最低价" className="ipt_min" value={this.state.minValue} onChange={this.minHandleChange.bind(this)} />
                        <i></i>
                        <input type="text" placeholder="输入最高价" value={this.state.maxValue}  onChange={this.maxHandleChange.bind(this)} />
                        <button>确定</button>
                    </div>
                </li>
            </ul>
        </div>
    );
  }

}

export default Cassify;
