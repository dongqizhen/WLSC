import React from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import './scss/Breadcrumb.scss';


class Breadcrumb extends React.Component {
  constructor() {
    super();
    this.state = {
        
    };
  }

  _hundleClick(){
    
  }

  render() {
    return (
        <ul className="breadcrumb clearfix">
            <li><Link to="/" onClick={this._hundleClick.bind(this)}>首页</Link></li>
            <li><Link to="#"  className="active">搜索结果页</Link></li>
            <li><span>配件</span></li>
            <li><span>二级分类</span></li>  
        </ul>
    );
  }

  componentDidMount() {
   // this.setState();
  }
}

export default Breadcrumb;