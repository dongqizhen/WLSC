import React from 'react';
import "./scss/Cassify.scss"


class Cassify extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="Cassify">
            <ul>
                <li>
                    <span>产品类型</span>
                    <div className="clearfix">
                        <span>配件</span>
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
            </ul>
        </div>
    );
  }

  componentDidMount() {
   // this.setState({ someKey: 'otherValue' });
  }
}

export default Cassify;
