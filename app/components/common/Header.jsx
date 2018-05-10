import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import styles from './scss/Header.scss'
import Search from '../Search/Search.jsx';
console.log(Search)
//console.log(styles)
class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Router basename="/">
                <div className = "header">
                    <div className = "head">
                        <div>
                            <ul className = "clearfix">
                                <li> 登陆/我的商城 </li> 
                                <li> 购物车 </li> 
                                <li> 商家中心 </li> 
                                <li className = "last"> 网来商城App </li>
                            </ul> 
                        </div>
                    </div>

                    <div className = "search clearfix">
                        <div className = "logo">
                            <a href = "#">
                                <img src = "../../assets/images/logo.png" />
                            </a> 
                        </div> 
                        <div className = "searchContainer">
                            <div className="seach_btn">
                                <i></i>
                                <input type="text" placeholder="请输入搜索内容，如飞利浦血压仪等" />
                                <Link to="/search" target="_black">搜索</Link>
                            </div>
                            <ul className="clearfix">
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                                <li>血压仪</li>   
                            </ul>
                        </div>
                    </div> 
                </div>
            </Router>    
        );
    }

    componentDidMount() {}
}

export default Header;